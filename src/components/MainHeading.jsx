import React from "react";

const MainHeading = ({ children }) => {
  return (
    <h2 className="text-3xl sm:text-5xl text-center md:text-7xl font-black mb-8 tracking-tight bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent">
      {children}
    </h2>
  );
};

export default MainHeading;
