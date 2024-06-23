"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

const BannerOne = () => {
  return (
    <Carousel
      className="w-full max-w-xs"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {brandsSlider.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative p-2  rounded-md shadow-lg text-white bg-black  bg-opacity-80 backdrop-filter backdrop-blur-lg ">
              <div className="relative z-10">
                <Link href="#">
                  <Image
                    className="w-full rounded-md min-h-[400px]"
                    width={300}
                    height={400}
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

export default BannerOne;

const brandsSlider = [
  {
    path: "#",
    title: "banner",
    image: "/images/banner/1.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/2.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/3.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/4.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/5.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/6.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/7.jpg",
  },
  {
    path: "#",
    title: "banner",
    image: "/images/banner/8.jpg",
  },
];
