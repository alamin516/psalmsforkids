"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

const BannerTwo = () => {
  return (
    <Carousel
      className="w-full max-w-xs"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {brandsSlider.map((item, index) => (
          <CarouselItem key={index}>
           <div className="relative p-2  rounded-md shadow-lg text-white glass-button">
              <div className="relative z-10">
                <Link href="#">
                  <Image
                    className="w-full rounded-md !h-[350px]"
                    width={350}
                    height={350}
                    src={item.image}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default BannerTwo;

const brandsSlider = [
  {
    path: "#",
    title: "banner",
    image: "/images/banner/8.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/7.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/6.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/5.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/4.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/3.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/2.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/1.jpg",
  },
];
