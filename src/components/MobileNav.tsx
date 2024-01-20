

import { Menu, MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
 
  SheetTrigger,
} from "./ui/sheet";
import UserAccountNav from "./UserAccountNav";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import Cart from "./Cart";

const MobileNav = async () => {
  
  const nextCookies = cookies();

  const { user } = await getServerSideUser(nextCookies);

  return (
      <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2 ">
          <MenuIcon className="h-6 w-6 text-white " />
        </SheetTrigger>
        <SheetContent className="flex flex-col pt-16 space-y-3 items-center text-white bg-black backdrop-blur-md bg-opacity-20">
       
          <Link className="text-white"  href="/">Home</Link>
          <Link className="text-white"  href="/manga">Manga</Link>
          <Link className="text-white"  href="/">WatchList</Link>
          <Cart ui={"Cart"} className="text-white  rounded-md" />
          
          <div>
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
        </SheetContent>
      </Sheet>
  );
};

export default MobileNav;
