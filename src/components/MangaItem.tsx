"use client";

import { TQueryValidator } from "@/lib/validators/query-validator";
import { Product } from "@/payload-types";
import { trpc } from "@/trpc/client";
import MangaListing from "./MangaListing";
import { Skeleton } from "./ui/skeleton";
import React from "react";

interface MangaItemProps {
  title?:string;
  query: TQueryValidator;
  href?:string;
  classname:string
  
}

const FALLBACK_LIMIT = 4;

const MangaItem = (props: MangaItemProps) => {
  const {  query,href,classname} = props;

  const { data: queryResult, isLoading } =
    trpc.getInfiniteProduct.useInfiniteQuery(
      {
        limit: query.limit ?? FALLBACK_LIMIT,
        query,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    );
  const products = queryResult?.pages.flatMap((page) => page.items);
  let map: (Product | null)[] = [];

  if (products && products.length) {
    map = products;
  } else if (isLoading) {
    map = new Array<null>(query.limit ?? FALLBACK_LIMIT).fill(null)
  }

  return (
    <>
    
    {map.map((product, i) => (
      <React.Fragment key={i}>
        {isLoading ? (
          // Skeleton loader when products are still loading
          <Skeleton className="sm:w-[150px] h-[210px] sm:h-[210px] lg:w-[170px] lg:h-[230px] md:w-[170px] md:h-[210px]" />
        ) : (
          // Actual MangaListing component when products are available
          <MangaListing
          classname={classname}
          key={`product-${i}`}
          product={product}
          index={i}
          />
        )}
      </React.Fragment>
    ))}
    </>
  );
};

export default MangaItem;