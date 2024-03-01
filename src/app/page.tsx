import { Wrapper } from "@/components/Wrapper";
import React from "react";
import HeroSlider from "@/components/HomePage";
const Page = () => {
  return (
    <Wrapper>
      <div
        className="relative w-full items-end flex justify-center  "
        id="homepage"
      >
        {/* <img
          src="/home.webp"
          alt="hero"
          className="max-w-full fixed" // Maintain aspect ratio
        /> */}
        <div className="absolute top-[10px] w-full  ">
          <div className="">
            <HeroSlider />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
