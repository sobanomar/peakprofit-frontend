import React from "react";
import clsx from "clsx";

const sizeClasses = {
  sm: "text-2xl sm:text-2xl md:text-3xl",
  md: "text-2xl sm:text-3xl md:text-4xl",
  lg: "text-3xl sm:text-4xl md:text-6xl", // default
};

const MainHeading = ({ children, size = "lg", className = "" }) => {
  return (
    <h2
      className={clsx(
        "px-6 text-center font-black mb-8 tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default MainHeading;
