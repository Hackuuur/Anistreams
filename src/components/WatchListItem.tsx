import React from 'react'
import { MANGA_CATEGORIES } from "@/config";
import { Animeproduct } from '@/payload-types';
import { watchlist } from '@/hooks/use-watchlist';
import Link from 'next/link';
import { ImageIcon, X } from 'lucide-react';

const WatchlistItem = ({ product }: { product: Animeproduct}) => {
    const { image } = product.images[0];
    const {removeItem}= watchlist()

  
  const label = MANGA_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label;
  return (
    <Link  href={`/item/${product.id}`} >
        <div className="space-y-3 py-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4 ">
          <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded-md ">
            {typeof image !== "string" && image.url ? (
              <img
                src={image.url}
                alt={product.name}
                
                className=" absolute object-cover "
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary">
                <ImageIcon
                  aria-hidden="true"
                  className="h-4 w-4 text-muted-foreground"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-sm font-medium mb-1">
              {product.name}
            </span>
            <span className="line-clamp-1 text-sm font-medium mb-1">
              {label}
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-1 font-medium" >
        <button onClick={()=> removeItem(product.id)} className="flex items-center" > <X className='w-4 h-4' color="red"/> Remove </button>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default WatchlistItem