'use client'
import React from 'react';

const VideoTab: React.FC = () => {
  return (
    <div>
      <iframe
        loading="lazy"
        title="YouTube video player"
        src="https://www.youtube.com/embed/8NUsnQ1EcOo"
        width="100%"
        height="415"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default VideoTab;
