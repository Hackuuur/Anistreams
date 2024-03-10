import AnimeCard from "@/components/AnimeListing";
import AnimeReel from "@/components/AnimeReel";
import { Wrapper } from "@/components/Wrapper";
import { PlaneIcon, PlayIcon } from "lucide-react";
import React from "react";
import Link from "next/link"; // Import Link from Next.js
import Footer from "@/components/Footer";

const Page = () => {
  const BREADCRUMBS = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Anime", href: "/Anime" },
  ];
  return (
    <>
    <Wrapper>
      <div className="">
        <ul className="flex"> {/* Added ul tag with flex class */}
          {BREADCRUMBS.map((breadcrumb, i) => (
            <li key={breadcrumb.href} className="flex items-center text-sm"> {/* Applied flex class to li element */}
              <Link
                href={breadcrumb.href}
                className="font-medium flex flex-row text-sm text-muted-foreground hover:text-gray-300"
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
            </li>
          ))}
        </ul>
      </div>
      <AnimeReel query={{sort:'-createdAt',limit:21}}  title="New Trending Anime" />
    </Wrapper>
    <Footer />
    </>
  );
};

export default Page;
