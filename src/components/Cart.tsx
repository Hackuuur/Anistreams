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
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import CartItem from "./CartItem";
import { buttonVariants } from "./ui/button";
interface cartProps {
  ui: string;
  className?: string;
}
const Cart = ({ ui, className }: cartProps) => {
  const { items } = useCart();
  const itemcount = items.length;

  const cartTotal = items.reduce(
    (total, { product }) => total + product.price,
    0
  );

  const fee = 10;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2 ">
        <span
          aria-hidden="true"
          className={` text-gray-800 ${className || ""}`}
        >
          {ui}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full text-white flex-col pr-0 sm:max-w-lg bg-black backdrop-blur-md bg-opacity-20">
        <SheetHeader className="space-y-2.5 pr-6 ">
          <SheetTitle className="text-white"> Cart </SheetTitle>
        </SheetHeader>
        {itemcount > 0 ? (
          <>
            <div className="felx w-full flex-col pr-6">
              <ScrollArea>
                {items.map(({ product }) => (
                  <CartItem product={product} key={product.id} />
                ))}
              </ScrollArea>
              Cart Itmes
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1"> Product Cost </span>
                  <span> {formatPrice(cartTotal)} </span>
                </div>
                <div className="flex">
                  <span className="flex-1"> Transaction Fee </span>
                  <span> {formatPrice(fee)} </span>
                </div>
                <div className="flex">
                  <span className="flex-1"> Total </span>
                  <span> {formatPrice(cartTotal + fee)} </span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({
                      className: "w-full",
                    })}
                  >
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <img
              height={300}
              width={300}
              src={"/empty.png"}
              alt="Empty Cart"
            />
            <div className="flex flex-col items-center gap-2">
              <span>Your Cart is Empty</span>
              <span> Grab Some Eye Catching Mangass</span>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
