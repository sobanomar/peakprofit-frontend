import React, { useEffect, useState } from "react";

export const CountdownTimer = () => {
  const targetDate = new Date("2025-12-01T00:00:00"); // Target date: 1st December 2025
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-200 dark:bg-gray-950 text-black dark:text-white py-1 px-4 text-center flex justify-around text-xs">
      <div className="flex justify-center items-center gap-2 text-sm font-medium tracking-wide">
        <span>{timeRemaining.days}d</span>
        <span>:</span>
        <span>{timeRemaining.hours}h</span>
        <span>:</span>
        <span>{timeRemaining.minutes}m</span>
        <span>:</span>
        <span>{timeRemaining.seconds}s</span>
      </div>
      <p className="text-sm hidden md:flex">
        Our product will be live on&nbsp; <strong> 1st December 2025</strong>.
      </p>

      {/* <p className="my-1 hidden md:flex text-sm text-gray-300">
        Stay tuned for the launch!
      </p> */}
    </div>
  );
};
