import React from "react";

const LoadingSpinner = ({ size = 30 }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className={`border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
