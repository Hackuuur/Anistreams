import AnimeCard from "@/components/AnimeListing";
import AnimeReel from "@/components/AnimeReel";
import { Wrapper } from "@/components/Wrapper";
import { PlaneIcon, PlayIcon } from "lucide-react";
import React from "react";
const Page = () => {
  return (
    <Wrapper>
      <AnimeReel query={{sort:'asc',limit:4}} href="/anime" title="New Anime" />
    </Wrapper>
  );
};

export default Page;
