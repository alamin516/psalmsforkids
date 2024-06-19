import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

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
