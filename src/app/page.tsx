import { Wrapper } from "@/components/Wrapper";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import HeroSlider from "@/components/HomePageSlider";

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
          <div className="" >
            <HeroSlider/>
          </div>
          
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
