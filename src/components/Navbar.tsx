import Image from "next/image";
import React from "react";
import { Wrapper } from "./Wrapper";
import Link from "next/link";
import { MenuIcon, Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import UserAccountNav from "./UserAccountNav";
import Cart from "./Cart";
const Navbar = async () => {

 
  
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);
  return (
    <div className="h-16 pt-2.5 top-0 sticky  backdrop-blur-md bg-opacity-50 z-50">
      <Wrapper className="flex justify-between items-center text-white">
        <div className="flex items-center">
          <Image src="/Logo.png" height={30} width={30} alt="Logo" />
          <Link href="/" className="font-bold ml-2 flex items-center">
            AniWatch
          </Link>
        </div>
        <div className="hidden md:block ">
          <div className="flex space-x-3 pl-20">
            <Link href="/">Trending</Link>
            <Link href={"/manga"}>Manga</Link>
            <Link href="/">WatchList</Link>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden md:block">
            <div className="relative flex items-center space-x-2">
              <Input
                type="search"
                id="default-search"
                placeholder="Search Anime you Like..."
                className="ml-2 px-2 py-1 text-sm text-white rounded-lg bg-black  dark:placeholder-gray-400 "
                required
              />
              <button className=" px-2 py-1.5 text-white bg-black hover:bg-white hover:border hover:transition-all hover:duration-700 hover:border-black hover:border-solid hover:text-black focus:outline-none font-medium rounded-lg text-sm">
                Search
              </button>
              <Cart ui={"Cart"} className="text-white border border-black px-2 py-1 rounded-md"  />
              {user ? (
                <UserAccountNav user={user} />
              ) : (
                <Link
                  href={"/sign-in"}
                  className="px-3 py-2 text-white hover:text-gray-300"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <MenuIcon />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
