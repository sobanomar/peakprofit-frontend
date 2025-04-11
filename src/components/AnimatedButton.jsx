import React from "react";

const AnimatedButton = ({ text, action }) => {
  return (
    <button
      onClick={action}
      className="relative bg-purple-600 cursor-pointer hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-colors duration-200 overflow-hidden border-1 border-purple-500 w-full"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-full w-[200%] bg-[linear-gradient(140deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] animate-delayed-sweep" />
      </div>

      {/* Button text */}
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default AnimatedButton;
