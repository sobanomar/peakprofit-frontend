import React from "react";
const ButtonGroup = ({ buttons, selectedValue, onButtonClick }) => {
  const badgeColorMap = {
    green: "bg-green-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className="flex flex-wrap w-full bg-[#2C193E] px-1 py-1 md:px-2 md:py-2 rounded-xl md:rounded-2xl gap-1 md:gap-2 mb-2 md:mb-4">
      {buttons.map((button) => {
        const isSelected = selectedValue === button.value;
        const baseClasses =
          "relative px-2 py-1 md:px-4 md:py-2 rounded-xl md:rounded-2xl font-medium md:font-semibold text-sm md:text-lg flex items-center justify-center gap-1 md:gap-2 flex-1 min-w-[calc(50%-0.5rem)] md:min-w-[120px]";
        const selectedClasses = isSelected
          ? "bg-white text-black"
          : "bg-[#472C64] text-white";

        return (
          <button
            key={button.value}
            onClick={() => onButtonClick(button.value)}
            className={`${baseClasses} ${selectedClasses}`}
          >
            {button.badgeText && (
              <span
                className={`absolute top-[-8px] md:top-[-10px] left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs px-1 md:px-2 py-[1px] md:py-[2px] rounded-full text-white ${
                  badgeColorMap[button.badgeColor] || "bg-gray-500"
                }`}
              >
                {button.badgeText}
              </span>
            )}

            {button.img && (
              <img
                src={button.img}
                alt={button.label}
                className="w-4 h-4 md:w-6 md:h-6 object-contain"
              />
            )}

            <span className="truncate">{button.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
