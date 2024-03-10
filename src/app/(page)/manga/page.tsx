"use client";

import CardSlider from "@/components/CardSliderHome";
import Cart from "@/components/Cart";
import MangaItem from "@/components/MangaItem";
import TrendingMangaComponent from "@/components/TrendingMangaComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,

  NavigationMenuList,
  NavigationMenuTrigger,
  
} from "@/components/ui/navigation-menu";
import Footer from "@/components/Footer";
const components: { title: string; href: string }[] = [
  {
    title: "Action",
    href: `/products?category=action_manga`,
  },
  {
    title: "Romance",
    href: `/products?category=romance_manga`,
  },
  {
    title: "Fantasy",
    href: `/products?category=fantasy_manga`,
  },
  {
    title: "Sci-Fi",
    href: `/products?category=sci_fi_manga`,
  },
  {
    title: "Horror",
    href: `/products?category=horror_manga`,
  },
  {
    title: "Adventure",
    href: `/products?category=adventure_manga`,
  },
  {
    title: "Comedy",
    href: `/products?category=comedy_manga`,
  },
  {
    title: "Drama",
    href: `/products?category=drama_manga`,
  },
  {
    title: "Mystery",
    href: `/products?category=mystery_manga`,
  },
];

const manga = () => {

  return (
    <>
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
          <div className="w-full items-center  px-3 flex  ">
            <Cart
              className="text-[28px]"
            />
            <span className="text-lg" >Cart</span>

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
              query={{ sort: "-createdAt", limit: 8 }}
            />
          </div>
        </div>
        <div>
          <hr className="pt-4 " />
          <div className="flex justify-between items-center " >

          <p className="pb-2 text-2xl font-bold">Trending Manga</p>
          <NavigationMenu className='bg-black'  >
          <NavigationMenuList className="mr-3   ">
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" bg-black text-white text-xl font-bold " >Filter</NavigationMenuTrigger>
              <NavigationMenuContent className="mr-2" >
                <ul className="grid  gap-3 p-2 ">
                  {components.map((component) => (
                    <li key={component.title}>
                      <Link href={component.href}>
                        {component.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
          </div>

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

        <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 px-3">
          <MangaItem
            classname="sm:w-[150px]  h-[220px] sm:h-[210px] lg:w-[170px] lg:h-[230px] md:w-[170px] md:h-[210px]"
            query={{ sort: "asc", limit: 20 }}
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default manga;
