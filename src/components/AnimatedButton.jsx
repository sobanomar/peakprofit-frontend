import React from "react";

const AnimatedButton = ({ text, action }) => {
  return (
    <button
      onClick={action}
      className="relative w-full hover:shadow-[0_0_30px_2px_rgba(174,48,255,0.5)] bg-purple-600 cursor-pointer  text-white py-5 px-8 rounded-2xl font-semibold transition-all duration-300 overflow-hidden border-1 border-purple-500 whitespace-nowrap"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-full w-[200%] bg-[linear-gradient(140deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] animate-delayed-sweep" />
      </div>

      {/* Button text */}
      <span className="relative z-10 xl:text-3xl font-bold">{text}</span>
    </button>
  );
};

export default AnimatedButton;
