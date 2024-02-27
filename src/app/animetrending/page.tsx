import AnimeReel from "@/components/AnimeReel";
import { Wrapper } from "@/components/Wrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <AnimeReel query={{sort:'-createdAt' ,limit:20}} href="/anime" title="New Trending Anime" />
    </Wrapper>
  );
};

export default page;
