"use client"
import React, { useState, useEffect } from "react";
import "@/styles/timer.css";

const CountDown: React.FC = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [timeUp, setTimeUp] = useState<string>("");

  const deadline = new Date("Jun 30, 2024 21:22:00").getTime();

  useEffect(() => {
    const count = () => {
      const now = new Date().getTime();
      const t = deadline - now;

      const dd = Math.floor(t / (1000 * 60 * 60 * 24));
      const hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      const ss = Math.floor((t % (1000 * 60)) / 1000);

      setDays(dd);
      setHours(hh);
      setMinutes(mm);
      setSeconds(ss);

      if (t <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setTimeUp("TIME IS UP");
      }
    };

    const interval = setInterval(count, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="p-[10px] md:w-1/2 w-full grid grid-cols-4 bg-white/10">
      <div className="">
        <div className="p-[10px] border-r-[1px] text-center border-[rgba(255, 255, 255, 0.2)]">
          <p>{days < 10 ? "0" + days : days}</p>
          <span className="text">Days</span>
        </div>
      </div>
      <div className="">
        <div className="p-[10px] border-r-[1px] text-center border-[rgba(255, 255, 255, 0.2)]">
          <p>{hours < 10 ? "0" + hours : hours}</p>
          <span className="text">Hours</span>
        </div>
      </div>
      <div className="">
        <div className="p-[10px] border-r-[1px] text-center border-[rgba(255, 255, 255, 0.2)]">
          <p>{minutes < 10 ? "0" + minutes : minutes}</p>
          <span className="text">Minutes</span>
        </div>
      </div>
      <div className="w-1/4">
        <div className="p-[10px] text-center ">
          <p>{seconds < 10 ? "0" + seconds : seconds}</p>
          <span className="text">Seconds</span>
        </div>
      </div>
      {timeUp && <div className="w-full text-center col-span-4 mt-2">{timeUp}</div>}
    </div>
  );
};

export default CountDown;


