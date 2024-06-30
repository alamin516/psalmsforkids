import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/styles/timeline.css";

const SimpleLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  
  
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default SimpleLayout;
