import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Link from "next/link";

const slider = [
  {
    title: "Boochi The Rock",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "manga/Bocchi-the-rock-comady.jpg",
    href:''
  },
  {
    title: "Fire Punch",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "manga/fire-punch-thriller.jpg",
    href:'/product/65e173136294afcb8f77d9f3'

  },
  {
    title: "Solo Leveling",
    description:
      "Sung Jinwoo, also known as 'the weakest hunter of all mankind' resides in a world full of awakened beings known as 'Hunters' whose sole purpose is to protect humanity by battling deadly monsters. Jinwoo struggles to survive in this world, faced with constant threats. However, after a brutal encounter leaves his party and his life in danger, he is chosen by a mysterious System as its only player. This is a rare opportunity for Jinwoo to level up his abilities beyond known limits. Join Jinwoo on his journey as he faces increasingly stronger enemies, both human and monster, to uncover the secrets hidden within the dungeons and push his abilities to the ultimate extent. This epic adventure includes a prologue, making it a complete story with several chapters.",
    url: "manga/solo-leveling-ad.jpg",
    href:'/product/65e168b26294afcb8f77ce82'
  },

  {
    title: "Undead unluck",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "manga/undead-unluck-sci-fi.jpg",
    href:''

  },
  {
    title: "Promised Never Land",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "manga/promised-neverland-thriller.jpg",
    href:''

  },
];

const CardSlider = () => {
  return (
    <>
      <Swiper
        className="w-[200px] h-[300px] sm:w-[400px] md:h-[400px] md:w-[300px] lg:w-[500px] lg:h-[440px] rounded-lg"
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
      >
        {slider.map((data, i) => (
          <SwiperSlide key={i} style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider rounded-lg">
            <Link href={data.href}>
        
                <div>
                  <h2>{data.title}</h2>
                  <p className="line-clamp-4 -tracking-wider">{data.description}</p>
                </div>
              
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSlider;
