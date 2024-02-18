import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const slider = [
  {
    title: "Testing",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "manga/Bocchi-the-rock-comady.jpg",
  },
  {
    title: "Testing",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "manga/fire-punch-thriller.jpg",
  },
  {
    title: "Testing",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "manga/solo-leveling-ad.jpg",
  },

  {
    title: "Testing",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "manga/undead-unluck-sci-fi.jpg",
  },
  {
    title: "Testing",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "manga/promised-neverland-thriller.jpg",
  },
];

const CardSlider = () => {
  return (
    <>
      <Swiper
        className=" w-[200px] h-[300px] lg:w-[500px] lg:h-[440px] rounded-lg "
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
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
        {slider.map((data,i) => (
          <SwiperSlide
            key={i}
            style={{ backgroundImage: `url(${data.url})` }}
            className="myswiper-slider rounded-lg "
          >
            <div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSlider;
