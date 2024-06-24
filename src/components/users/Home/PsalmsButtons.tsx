import Link from "next/link";
import React from "react";

const PsalmsButtons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-1">
      {Array.from({ length: 150 }).map((_, i) => {
        return (
          <Link
            key={i}
            href={`/psalms/${i + 1}`}
            className="w-[42px] h-[42px] flex items-center justify-center bg-opacity-20 backdrop-filter backdrop-blur-md bg-slate-300 border border-slate-500/50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
          >
            <span>{i + 1}</span>
          </Link>
        );
      })}
      <Link href={'/bible'} className="w-[90px] flex items-center justify-center bg-opacity-20 backdrop-filter backdrop-blur-md bg-slate-300 border border-slate-500/50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <span>The Bible</span>
      </Link>
    </div>
  );
};

export default PsalmsButtons;
