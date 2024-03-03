import AnimeCard from "@/components/AnimeListing";
import AnimeReel from "@/components/AnimeReel";
import { Wrapper } from "@/components/Wrapper";
import { PlaneIcon, PlayIcon } from "lucide-react";
import React from "react";
const Page = () => {
  return (
    <Wrapper>
      <div className="" >
      <AnimeReel query={{sort:'-createdAt',limit:21}} href="/animetrending" title="New Anime" />
      </div>
     
    </Wrapper>
  );
};

export default Page;
