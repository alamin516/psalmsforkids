"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import Image from "next/image";
import "@/styles/timeline.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Timeline Items
const timelineItems = [
  {
    src: "/images/timeline/image1.png",
    title: "Spirituality vs. Religion",
    description:
      "Spirituality vs. religion is an ancient debate. For some, religion is a set of dogmas an...",
  },
  {
    src: "/images/timeline/image2.png",
    title: "Prayer for World Peace",
    description: "Description for second image...",
  },
  {
    src: "/images/timeline/image2.png",
    title: "Prayer for World Peace",
    description: "Description for second image...",
  },
  {
    src: "/images/timeline/image2.png",
    title: "Prayer for World Peace",
    description: "Description for second image...",
  },
  {
    src: "/images/timeline/image2.png",
    title: "Prayer for World Peace",
    description: "Description for second image...",
  },
  {
    src: "/images/timeline/image2.png",
    title: "Prayer for World Peace",
    description: "Description for second image...",
  },
  {
    src: "/images/timeline/image2.png",
    title: "Prayer for World Peace",
    description: "Description for second image...",
  },
];

const TimelineSlider = () => {
  return (
    <div className="container px-0 max-w-5xl mx-auto relative">
      <div className="container max-w-4xl mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
          loop={true}
          coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        >
          {timelineItems.map((item, i) => {
            return (
              <SwiperSlide key={i} className="bg-transparent">
                <div className="text-center">
                  <h2 className="font-henny text-[20px] mb-3">
                    {item["title"]}
                  </h2>
                  <Image
                    width={300}
                    height={500}
                    src={item["src"]}
                    alt={item["title"]}
                  />
                  <p className="mt-3 ">{item["description"]}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="absolute flex w-full justify-between gap-3 items-center z-10 top-1/2">
        <div className="button-prev w-8 h-8 flex items-center justify-center hover:bg-white rounded-sm hover:text-black cursor-pointer">
          <ArrowLeft />
        </div>
        <div className="button-next w-8 h-8 flex items-center justify-center hover:bg-white rounded-sm hover:text-black cursor-pointer">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};
export default TimelineSlider;
