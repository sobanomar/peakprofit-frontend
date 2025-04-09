import React from "react";

const ButtonGroup = ({ buttons, selectedValue, onButtonClick }) => {
  const badgeColorMap = {
    green: "bg-green-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className="flex w-full bg-[#2C193E] px-2 py-2 rounded-2xl gap-2 mb-4 flex-wrap">
      {buttons.map((button) => {
        const isSelected = selectedValue === button.value;
        const baseClasses =
          "relative px-4 py-2 rounded-2xl flex-1 font-semibold text-lg flex items-center justify-center gap-2 min-w-[120px]";
        const selectedClasses = isSelected
          ? "bg-white text-black"
          : "bg-[#472C64] text-white";

        return (
          <button
            key={button.value}
            onClick={() => onButtonClick(button.value)}
            className={`${baseClasses} ${selectedClasses}`}
          >
            {/* Badge */}
            {button.badgeText && (
              <span
                className={`absolute top-[-10px] left-1/2 transform -translate-x-1/2 text-xs px-2 py-[2px] rounded-full text-white ${
                  badgeColorMap[button.badgeColor] || "bg-gray-500"
                }`}
              >
                {button.badgeText}
              </span>
            )}

            {/* Optional image */}
            {button.img && (
              <img
                src={button.img}
                alt={button.label}
                className="w-6 h-6 object-contain"
              />
            )}

            {button.label}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
