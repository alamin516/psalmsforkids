"use client";
import Image from "next/image";
import React, { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  {
    title: "Sun-Girl",
    src: "/images/Sun-Girl.webp",
  },
  {
    title: "Sun-Girl",
    src: "/images/slider/1.jpg",
  },
  {
    title: "Sun-Girl",
    src: "/images/slider/2.jpg",
  },
];

export function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: "slider-bullet",
          bulletActiveClass: "slider-bullet-active",
        }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        speed={500}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Navigation]}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="w-full h-[300px] lg:h-[60vh] !p-0 hero-carousel"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <Image
                width={2000}
                height={500}
                src={item["src"]}
                alt={item["title"]}
                className="w-full h-[300px] lg:h-[60vh] object-fill"
              />
              <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 font-henny text-2xl">
                {item.title} {index + 1}
              </div>
            </div>
          </SwiperSlide>
        ))}

        
      </Swiper>
      <div className="absolute w-full bottom-0 py-2">
          <div className="container max-w-7xl mx-auto flex justify-between items-center z-10">
            <div className="text-black z-50">
              {currentIndex + 1 <= 9 ? `0${currentIndex + 1}` : currentIndex} |{" "}
              {total <= 9 ? "0" + total : total}
            </div>
            <div className="flex gap-3 items-center z-10">
              <div className="button-prev w-8 h-8 flex items-center justify-center hover:bg-black rounded-sm hover:text-white cursor-pointer">
                <ArrowLeft />
              </div>
              <div className="button-next w-8 h-8 flex items-center justify-center hover:bg-black rounded-sm hover:text-white cursor-pointer">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
