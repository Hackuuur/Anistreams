"use client";

import CardSlider from "@/components/CardSliderHome";
import Cart from "@/components/Cart";
import MangaItem from "@/components/MangaItem";
import TrendingMangaComponent from "@/components/TrendingMangaComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

import React from "react";

const manga = () => {
  return (
    <div className="backdrop-blur-md bg-opacity-50 mx-3 text-white min-w-[320px] rounded-md p-1 ">
      <div className="flex flex-col md:flex-row justify-around py-4 px-3 md:mx-8 mb-4">
        <div className="mb-4 md:mb-0 md:mr-8  ">
          <div className=" w-[200px] flex justify-around  mb-7">
            <h3>Manga</h3>
            <h3>Comics</h3>
            <h3>Novels</h3>
          </div>
          <p className="text-[40px] font-semibold mb-2">
            Welcome to AniWatch,
            <br />
            Home Of Creativity!
          </p>
          <p className="max-w-2xl mb-4">
            Aniwatcher lets you connect with your favorite authors and interact
            with fellow fans. For authors, build universes from your original
            series, monetize your stories, engage your fan base, and share your
            Stories.
          </p>
          <div className="w-full items-center justify-center  ">
            <Cart
              ui="Check Cart"
              className="h-7 w-fit  px-3 pt-[2px] rounded-lg bg-white hover:bg-black hover:text-white  "
            />
          </div>
        </div>
        <div className="">
          <CardSlider />
        </div>
      </div>

      <div className="flex justify-around flex-col mx-4 lg:flex-row">
        <div>
          <hr className="pb-4" />
          <p className="pb-2 text-2xl font-bold">New Manga</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-3 pb-2">
            <MangaItem
              classname="sm:w-[150px]  h-[220px] sm:h-[210px] lg:w-[170px] lg:h-[230px] md:w-[170px] md:h-[210px]"
              query={{ sort: "-createdAt", limit: 10 }}
            />
          </div>
        </div>
        <div>
          <hr className="pt-4 " />
          <p className="pb-2 text-2xl font-bold">Trending Manga</p>

          <ScrollArea className="w-full lg:w-[350px] h-[250px]">
            <TrendingMangaComponent />
          </ScrollArea>
        </div>
      </div>

      <div className="mx-4">
        <hr className="m-4 " />
        <div className="flex justify-between" >

        <p className="pb-2 text-2xl font-bold">All Available manga</p>
        <Link href="/products" >See All</Link>
        </div>

        <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
          <MangaItem
            classname="sm:w-[150px]  h-[220px] sm:h-[210px] lg:w-[170px] lg:h-[230px] md:w-[170px] md:h-[210px]"
            query={{ sort: "asc", limit: 10 }}
          />
        </div>
      </div>
    </div>
  );
};

export default manga;
