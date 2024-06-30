"use client";
import { Autoplay, Pagination } from "swiper/modules";
import TextQuoteBlock from "./TextQuoteBlock";

import { Swiper, SwiperSlide } from "swiper/react";

const QuoteBlock = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        grabCursor={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false
        }}
        modules={[Pagination, Autoplay]}
      >
        {Array.from({ length: 5 }).map((item, i) => {
          return (
            <SwiperSlide key={i} className="mb-8">
              <TextQuoteBlock />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default QuoteBlock;
