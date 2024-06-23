'use client'
import React from "react";

interface PageTitlePros {
  image: string;
  title: string;
  description: string;
}

const PageTitle: React.FC<PageTitlePros> = ({ image, title, description }) => {
  return (
    <section className="page-title-section relative overflow-hidden pt-32 pb-32">
      <div className="absolute inset-0 bg-overlay"></div>
      <div className="container mx-auto max-w-7xl px-4 z-10">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-5xl text-white opacity-70 mb-2 z-50 font-henny">{title}</h1>
            <h2 className="text-white opacity-90 leading-tight sm:leading-snug tracking-[-1px]">
              {description}
            </h2>
          </div>
        </div>
      </div>
      <style jsx>{`
        .page-title-section {
          background: url('${image}') no-repeat center center/cover;
        }
        .bg-overlay {
          background: #1c1c1c;
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
};

export default PageTitle;
