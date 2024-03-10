import { Animeproduct } from "@/payload-types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Animeimage from "./Animeimage";
import { MANGA_CATEGORIES } from "../config";

interface classname {
  className?: string;
  hover?: string;
  product: Animeproduct | null;
  index: number;
}
const AnimeListing = ({ product, index, className, hover }: classname) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);
  if (!product || !isVisible) return <ProductPlaceholder />;
  const validUrls = product.images
  .map(({ image }) => (typeof image === "string" ? image : image.url))
  .filter(Boolean) as string[];
  const label = MANGA_CATEGORIES.find(({ value }) =>
  product.category.includes(value)
)?.label;
  if (isVisible && product) {
    return (
      <Link
        href={`/item/${product.id}`}
        className={cn("invisible h-full w-full cursor-pointer group/main", {
          "visible animate-in fade-in-5": isVisible,
        })}
      >
        <div className="wrapper">
          <div className="card sm:w-[150px] h-[210px] sm:h-[210px] lg:w-[170px] lg:h-[230px] md:w-[170px] md:h-[210px]">
            <Animeimage urls={validUrls}/>
            <div className={`details`}>
              <p className="pb-3 md:text-base">{product.name}</p>

              <div className="tags">
                <span className="tag">{label}</span>
              </div>
              <p className=" text-xs line-clamp-4 -tracking-wider md:text-sm ">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
};
const ProductPlaceholder = () => {
  return (
    <div className=" flex flex-col w-full ">
      <div
        className={`card relative sm:w-[150px] h-[210px] sm:h-[210px] lg:w-[170px] lg:h-[230px] md:w-[170px] md:h-[210px]  `}
      >
        <Skeleton className="h-full w-full" />
      </div>
    </div>
  );
};

export default AnimeListing;
