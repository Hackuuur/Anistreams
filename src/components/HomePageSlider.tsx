import React from "react";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import UserAccountNav from "./UserAccountNav";


const HomePageSlider: React.FC = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);
  return (
    <>
      <div className="relative isolate pt-8">
        <div
          className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2x py-44 md:py-36 lg:py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-500/10 hover:ring-gray-900/20">
              New Mangas/Manhwa and Anime .{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                More <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              Watch & Read Online Manga and Anime
            </h1>
            <p className="mt-6 text-base leading-8 text-gray-400">
              AniStream is Free Platform Where You can Watch Anime content without any ad disturbance and also purchase your Favorite Manga/Manhwa
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            {user ? (
              <UserAccountNav user={user} />
            ) : (
              <a
              href={"/sign-in"}
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign In
              </a>
            )}
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-300"
              >
                GO to <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      
        <div
          className="absolute inset-x-0 bottom-[-10px] -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
          
        </div>
        <div className="flex justify-between right-3 space-x-4 absolute inset-x-0">
          <div
            className="animate-bounce flex text-sm md:text-base text-white space-x-1"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "bottom left",
            }}
          >
            <Link href={"/anime"} className=" font-extrabold">
              Watch Now
            </Link>
            <ArrowRight />
          </div>
          <div className="flex text-white md:text-2xl text-[20px] space-x-4">
            <Link href={"/"}>
              <FaFacebook />
            </Link>
            <Link href={"/"}>
              <FaGithub />
            </Link>
            <Link href={"/"}>
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageSlider;
