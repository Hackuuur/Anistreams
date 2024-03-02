"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator";
import { trpc } from "@/trpc/client";
import { ZodError } from "zod";
import { useRouter,useSearchParams } from "next/navigation";
import Image from "next/image";

const Page = () => {

  const router = useRouter()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({
    onError: (err) => {
      if (err.data?.code === "CONFLICT") {
        toast.error("This Email is Already Register. Sign in instead ?");
        return;
      }
      if (err instanceof ZodError) {
        toast.error(err.issues[0].message);

        return;
      }
      toast.error("Somethig Went Wrong. Please try again");
    },
    onSuccess: ({ sentToEmail }) => {
      toast.success(`Verification email sent to ${sentToEmail}.`);
      router.push("/verify-email?to=" + sentToEmail);
    },
  });
  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    mutate({ email, password });
  };

  return (
    <div className="flex items-center justify-center pt-32 px-20 ">
      <div
        className="w-full max-w-md p-3 sm:p-4 lg:p-8 md:py-5 rounded-md text-white bg-slate-400 bg-opacity-20"
        id="sign-up"
      >
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={"/Logo.png"}
            alt="logo"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Create an Account
          </h1>
          <Link
              className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5 text-white ',
              })}
              href='/sign-in'>
              Already have an account?
              <ArrowRight className='h-4 w-4' />
            </Link>
        </div>
        <hr className="w-full bg-gray-100 dark:bg-gray-700 h-1 mx-auto mt-3  border-0 rounded " />
        <div className="grid gap-4 mt-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-y-3 lg:gap-y-4">
              <div className="grid gap-y-1 lg:gap-y-2">
                <Label htmlFor="Email">Email</Label>
                <Input
                  {...register("email")}
                  type="email"
                  className={cn(
                    "border p-2 text-black focus:outline-none focus:ring focus:border-black",
                    { "focus-visible:ring-red-500": errors.email }
                  )}
                  placeholder="Email"
                />
                {errors?.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-1 py-2 ">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password")}
                  type="password"
                  className={cn(
                    "border p-2 text-black focus:outline-none focus:ring focus:border-black",
                    { "focus-visible:ring-red-500": errors.password }
                  )}
                  placeholder="Password"
                />
                {errors?.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="flex justify-end">
                <Button variant="ghost" className="w-[100px]">
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;