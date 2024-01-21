"use client";


import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { User } from "@/payload-types";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
const UserAccountNav = ({ user }: { user: User }) => {
  const { signOut } = useAuth();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            className=" rounded-full "
          />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm ">
          <DrawerHeader>
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                className=" rounded-full "
              />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </DrawerHeader>
          <div className="flex items-center justify-start gap-2 ">
            <div className=" p-2 flex flex-col space-y-0.5 leading-none">
              <p className=" font-medium text-sm  ">{user.email}</p>
            </div>
          </div>
          <Link href="/creator" className="p-2 backdrop-blur-md bg-opacity-50">
            Creator Dashboard
          </Link>
          <DrawerFooter>
            <Button onClick={signOut} className="  cursor-pointer p-2 ">
              Log out
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">x</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default UserAccountNav;
