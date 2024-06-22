"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "@/styles/timeline.css";

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
    <div className="max-w-7xl mx-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {timelineItems.map((item, i) => {
          return (
            <SwiperSlide key={i} className="bg-transparent">
              <div className="text-center">
                <h2>{item["title"]}</h2>
                <Image
                  width={300}
                  height={500}
                  src={item["src"]}
                  alt={item["title"]}
                />
                <p>{item["description"]}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default TimelineSlider;
