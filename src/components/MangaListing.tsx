// MangaListing.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
import { MANGA_CATEGORIES } from "../config";
import ImageSlider from "./ImageSlider";
import { Product } from "@/payload-types";

interface MangaListingProps {
  product: Product | null;
  index: number;
  classname: string;
}

const MangaListing: React.FC<MangaListingProps> = ({ product, index,classname }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (!product || !isVisible) {
    return 
  }

  const validUrls = product.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  const label = MANGA_CATEGORIES.find(
    ({ value }) => product.category.includes(value)
  )?.label;

  return (
    <Link
      className={cn("invisible h-full w-full cursor-pointer group/main", {
        "visible animate-in fade-in-5": isVisible,
      })}
      href={`/product/${product.id}`}
    >
      <div className="flex flex-col w-full">
        <ImageSlider className={classname} urls={validUrls} />

        <h3 className="mt-4 font-medium text-sm text-gray-100">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-400">{label}</p>
        <p className="mt-1 font-medium text-sm text-gray-200">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default MangaListing;
