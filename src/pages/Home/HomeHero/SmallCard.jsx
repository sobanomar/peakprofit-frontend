import React from "react";

const SmallCard = ({ img, mainText, subText }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-1">
        <img className="w-6 h-6" src={img} />
      </div>
      <h3 className="text-sm md:text-lg font-semibold">{mainText}</h3>
      <p className="text-gray-300 text-xs">{subText}</p>
    </div>
  );
};

export default SmallCard;
