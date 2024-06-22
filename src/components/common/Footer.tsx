import React from "react";
import AboutWidget from "../widgets/About";
import LatestBlogPostWidget from "../widgets/LatestBlogPostWidget";
import OtherStuffWidget from "../widgets/OtherStuffWidget";
import "@/styles/widgets.css";
import BibleVerseWidget from "../widgets/BibleVerseWidget";

const Footer = () => {
  return (
    <footer className=" px-5 lg:px-10 pt-24 pb-8 bg-[#1c1c1c] text-[#6f6f6f]">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <AboutWidget />
        <LatestBlogPostWidget />
        <OtherStuffWidget />
        <BibleVerseWidget />
      </div>
      <div className="container max-w-7xl mx-auto">
      <hr className="border-[#6f6f6f] w-full md:px-[15px]" />
      </div>
      <div className="container max-w-7xl mx-auto lg:flex pt-10 text-[12px]">
        <div className="text-left sm:w-1/2 w-full md:px-[15px]">
          Psalms For Kids are associated with various affiliate marketing
          programs, which means we may get paid commissions on editorially
          chosen products purchased through our links.
        </div>
        <div className="text-right sm:w-1/2 w-full md:px-[15px]">
          © 2008 - 2023 Psalms For Kids, a KRAE Production. All rights reserved.{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
