import Link from 'next/link';
import React from 'react'

const AudioTab = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-1">
      {Array.from({ length: 66 }).map((item, index) => {
        return (
          <Link
            key={index}
            href={`#`}
            className="w-full h-[42px] text-sm flex items-center justify-center glass-button rounded-lg shadow md:mt-0 xl:p-0"
          >
            <span>{`Genesis`}</span>
          </Link>
        );
      })}
    </div>
  )
}

export default AudioTab