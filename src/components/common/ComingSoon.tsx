import React from "react";
import CountDown from "../Countdown/Timer";
import "@/styles/commingsoon.css";

const ComingSoon = () => {
  return (
    <div className="coming_soon">
        <div className="container max-w-7xl flex flex-col gap-2 justify-center items-center h-auto">
          <h1 className="text-[38px] uppercase leading-1 text-center font-henny">
            Shop
            <br />
            Coming Soon
          </h1>
          {/* <CountDown /> */}
        </div>
    </div>
  );
};

export default ComingSoon;
