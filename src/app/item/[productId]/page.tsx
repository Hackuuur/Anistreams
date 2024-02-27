import AnimeReel from "@/components/AnimeReel";
import { getPayloadClient } from "@/get-payload";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeart, FaPlay } from "react-icons/fa";
import { notFound } from "next/navigation";
import { MANGA_CATEGORIES } from "@/config";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimeFile, ProductFile } from "@/payload-types";
import { cookies } from "next/headers";
import { getServerSideUser } from "@/lib/payload-utils";
import AddTowatchlist from "@/components/Addtowatchlist";

const BREADCRUMBS = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Anime", href: "/Anime" },
];
interface PageProps {
  params: {
    productId: string;
  };
}
const page = async ({ params }: PageProps) => {

  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  const { productId } = params;
  const payload = await getPayloadClient();
  const { docs: products } = await payload.find({
    collection: "animeproduct",
    limit: 1,
    where: {
      id: {
        equals: productId,
      },
      approvedForupload: {
        equals: "approved",
      },
    },
  });

  const [product] = products;
  const video = (product.anime_files as AnimeFile).url as string;

  if (!product) return notFound();

  const label = MANGA_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label;

  return (
    <>
    {user ? (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-3 md:py-8 relative">
        <div className="text-white mt-8 md:mt-0 px-6 md:ml-8 lg:ml-16 xl:ml-32 z-10">
          <div className="inside-heropage">
            <div className="flex flex-col py-2">
              <ol className="flex items-center space-x-2">
                {BREADCRUMBS.map((breadcrumb, i) => (
                  <li key={breadcrumb.href}>
                    <div className="flex items-center text-sm">
                      <Link
                        href={breadcrumb.href}
                        className="font-medium text-sm text-muted-foreground hover:text-gray-300"
                      >
                        {breadcrumb.name}
                      </Link>
                      {i !== BREADCRUMBS.length - 1 ? (
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
              <span className=" text-gray-400 font-bold">NOW STREAMING</span>
              <div className=" bg-white h-1 w-16 rounded-sm"></div>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-5xl w-full font-bold mt-2">
              {product.name}
            </h1>
            <div className="tags">
              <span className="tag">{label}</span>
            </div>
            <div className="mt-4 space-y-6">
                <ScrollArea className=" h-[150px] w-full text-base text-muted-foreground max-w-3xl">
                  {product.description}
                </ScrollArea>
              </div>
            <div className="mt-4 md:mt-8 flex gap-3 flex-row">
              <a
                href="#"
                className="flex items-center bg-black border border-white hover:bg-white hover:text-black ease-in duration-300 py-2 px-4 rounded-full text-white text-base md:text-lg mb-2 md:mb-0 md:mr-4"
              >
                <FaPlay className="mr-2" />
                Watch Now
              </a>
              <a
                href="#"
                className="flex items-center bg-white border border-black hover:bg-black hover:text-white ease-in duration-300 py-2 px-4 rounded-full text-black text-base md:text-lg mb-2 md:mb-0 md:mr-4"
              >
                <FaHeart className="mr-2" />
                <AddTowatchlist AnimeProduct={product} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <video
            src={video} // Accessing the url property
            controls
            className="h-64 md:h-96 lg:h-112 xl:h-128 object-cover rounded-lg md:mr-5 "
          ></video>
        </div>
      </div>
      <div className="py-8 px-6 md:px-10">
        <AnimeReel
        
          query={{ sort: "asc", limit: 14 }}
          href="/anime"
          title="New Anime"
        />
      </div>
    </div>):(
       <div className="min-h-screen flex items-center justify-center bg-black">
       <div className="max-w-md px-8 py-6 bg-white shadow-lg rounded-lg">
         <h2 className="text-2xl font-bold mb-4 text-black">Please Sign In</h2>
         <p className="text-gray-600 mb-6">You need to sign in to access this page.</p>
         <Link
                href={"/sign-in"}
                className="px-3 py-2 bg-black rounded-md text-gray-200 hover:text-gray-500"
              >
                Sign In
          </Link>
       </div>
     </div>
    )}
    </>
  );
};

export default page;
