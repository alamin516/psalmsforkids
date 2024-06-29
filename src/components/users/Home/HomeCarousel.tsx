"use client";
import Image from "next/image";
import React from "react";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


const images = [
    {
        title: 'Sun-Girl',
        src: '/images/Sun-Girl.webp',
    },
    {
        title: 'Sun-Girl',
        src: '/images/Sun-Girl.webp',
    },
    {
        title: 'Sun-Girl',
        src: '/images/Sun-Girl.webp',
    },
    {
        title: 'Sun-Girl',
        src: '/images/Sun-Girl.webp',
    },
    {
        title: 'Sun-Girl',
        src: '/images/Sun-Girl.webp',
    },
    {
        title: 'Sun-Girl',
        src: '/images/Sun-Girl.webp',
    }
]


export function HomeCarousel() {


  return (
    <Swiper
    slidesPerView={1}
    loop={true}
    pagination={{
      clickable: true,
    }}
    // navigation={true}
    modules={[Pagination, Navigation]}
    className="w-full h-[300px] lg:h-[60vh] !p-0 hero-carousel"
  >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <Image
                width={2000}
                height={500}
                src={item['src']}
                alt={item['title']}
                className="w-full h-[300px] lg:h-[60vh] object-fill"
              />
              <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2">
                {item.title} {index + 1}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
