import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MANGA_CATEGORIES } from "../config";
import Image from "next/image";
import Link from "next/link";
import { Fingerprint } from "lucide-react";

type Category = typeof MANGA_CATEGORIES[number]

interface itemProps {
    category: Category
   
}

const TrendingMangaItem = ({category}:itemProps) => {
  return (
    <>

    <div className="flex flex-row my-2 px-2 mx-3  ">
      <Popover>
        <PopoverTrigger className=" py-[25px] w-full h-[25px] flex items-center justify-between  uppercase tracking-widest font-light ">
          {category.label}
          <Fingerprint className="text-white  " />
        </PopoverTrigger >
        <PopoverContent className="backdrop-blur-md bg-opacity-50 bg-black w-[210px] md:w-[260px]  ">
          <div className="mx-auto w-full px-3 " >
             <div className="gird grid-cols-4 " >
                <div className="col-span-4 col-start-1 grid grid-col-3">
                    {category.featured.map((item)=>(
                        <div key={item.name} className="group relative text-base sm:text-sm" > 
                            <div className="relative aspect-video overflow-hidden rounded-lg  backdrop-blur-md bg-opacity-50 group-hover:opacity-75" >
                                <Image src={item.imageSrc} alt="image" fill className=" object-cover object-center p-1 rounded-lg " />
                            </div>
                            <div className="flex items-center justify-between text-[10px]" >

                            <Link href={item.href} className="mt-1 font-medium text-gray-100" >{item.name}</Link>
                            <p className=" text-gray-200 " >Buy Now</p>
                            </div>
                            <hr className="py-1" />
                         </div>
                    ))}
                </div>
             </div>

          </div>
        </PopoverContent>
      </Popover>
    </div>
          </>
  );
};

export default TrendingMangaItem;
