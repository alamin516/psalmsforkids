'use client'
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollBottomToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const scrollTop = () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }


  return (
    <div onClick={scrollTop} className={`${isVisible ? 'opacity-1 bottom-[30px]' : ' opacity-0'} flex items-center justify-center text-white bg-[#878787] leading-7 font-bold h-[30px] w-[30px] p-0 fixed right-[45px] text-center no-underline bottom-[105%] z-50 rounded-full cursor-pointer duration-1000 ease hover:bg-[#000] hover:text-[#ff214f]`}>
      <ArrowUp className="h-4 w-4 leading-[30px]" />
    </div>
  );
};

export default ScrollBottomToTop;
