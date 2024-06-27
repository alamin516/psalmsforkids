"use client";
import React from "react";

const VideoTab: React.FC = () => {
  return (
    <div className="video-container relative">
      <iframe
        loading="lazy"
        title="YouTube video player"
        src="https://www.youtube.com/embed/8NUsnQ1EcOo"
        width="100%"
        height="425"
        frameBorder="0"
        allowFullScreen={true}
        className="video-iframe h-[300px] lg:h-[450px] md:h-[415px]"
      ></iframe>
    </div>
  );
};

export default VideoTab;
