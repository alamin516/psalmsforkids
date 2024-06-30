"use client"
import useAOS from "@/hooks/useAOS";
import Link from "next/link";
import React, { useEffect } from "react";

const PsalmsButtons = () => {
  const AOS = useAOS();

  useEffect(() => {
    AOS.refresh();
  }, [AOS]);


  return (
    <div className="flex flex-wrap justify-center gap-1 aos-init aos-animate"  data-aos="fade-up"
    data-aos-delay="100">
      {Array.from({ length: 150 }).map((_, i) => {
        return (
          <Link
            key={i}
            href={`/psalm/${i + 1}`}
            className="w-[42px] h-[42px] flex items-center justify-center glass-button rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
          >
            <span>{i + 1}</span>
          </Link>
        );
      })}
      <Link href={'/the-bible'} className="w-[90px] h-[42px] flex items-center justify-center glass-button rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <span>The Bible</span>
      </Link>
    </div>
  );
};

export default PsalmsButtons;
