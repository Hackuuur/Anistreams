"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ArrowBigRight, ArrowRight, ShoppingCart } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { watchlist } from "@/hooks/use-watchlist";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import CartItem from "./CartItem";
import { buttonVariants } from "./ui/button";
import WatchlistItem from "./WatchListItem";
import { IoIosAddCircleOutline } from "react-icons/io";

interface WatchListProps {
  ui: string;
  className?: string;
}
const WatchLIst = ({ui,className}:WatchListProps) => {
    const { items } = watchlist();
  const itemcount = items.length;

 
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2 ">
        <span
          aria-hidden="true"
          className={` text-gray-200 ${className || ""}`}
        >
          {ui}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full text-white flex-col pr-0 sm:max-w-lg bg-black backdrop-blur-md bg-opacity-20">
        <SheetHeader className="space-y-2.5 pr-6 ">
          <SheetTitle className="text-white"> Watch List </SheetTitle>
        </SheetHeader>
        {itemcount > 0 ? (
          <>
            <div className="felx w-full flex-col pr-6">
              <ScrollArea>
                {items.map(({ product }) => (
                  <WatchlistItem  product={product} key={product.id} />
                ))}
              </ScrollArea>
              WatchList Itmes
            </div>
            
          </>
        ) : (
          <div className="flex mt-8 flex-col justify-center items-center">
           <Link href={'/anime'} >
           
            <img
             className=" border mb-5 border-white rounded-full  "
              height={100}
              width={100}
              src={"/add.png"}
              alt="Empty Cart"
            />
           </Link>
            <div className="flex flex-col items-center gap-2">
              <span>Add Your Favourite Anime in This Bucket </span>
              <span>&</span>
              <span>Enjoye After</span>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default WatchLIst