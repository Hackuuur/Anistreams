'use client'

import { TQueryValidator } from "@/lib/validators/query-validator";
import { Animeproduct } from "@/payload-types";
import { trpc } from "@/trpc/client";
import Link from "next/link";
import React from "react";
import AnimeListing from "./AnimeListing";

interface AnimeReel {
  title: string;
  href?: string;
  query: TQueryValidator;
}

const FALLBACK_LIMIT = 4

const AnimeReel = (props: AnimeReel) => {
  const { title, href,query } = props;

  const {data:queryResults, isLoading} = trpc.getInfiniteAnime.useInfiniteQuery(
    {
       limit: query.limit ?? FALLBACK_LIMIT, 
       query
    },
    {
        getNextPageParam:(lastpage)=> lastpage.nextPage
    }
)
 
const products = queryResults?.pages.flatMap(
    (page) => page.items
  )
  let map:(Animeproduct | null)[] = []

  if(products && products.length){
    map = products
  } else if ( isLoading ){
    map = new Array<null>(query.limit ?? FALLBACK_LIMIT).fill(null)
  }

return (
    <section className='py-12'>
      <div className='flex items-center justify-between mb-4'>
        <div className='max-w-2xl px-4 lg:max-w-4xl lg:px-0'>
        {title ? (
            <h1 className='text-2xl font-bold text-gray-300 sm:text-3xl'>
              {title}
            </h1>
          ) : null}
        </div>
        {href ? (
          <Link
            href={href}
            className=' text-sm pr-1 font-medium text-blue-600 hover:text-blue-500'>
            More
            <span aria-hidden='true'> &rarr;</span>
          </Link>
        ) : null}
      </div>
      <div className='relative'>
        <div className='mt-6 flex items-center w-full'>
          <div className='w-full grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-4 sm:gap-x-1 md:grid-cols-4 md:gap-y-6 lg:gap-x-4 lg:grid-cols-7'>
            {map.map((product,i)=>(
                <AnimeListing  key={i} index={i} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeReel;
