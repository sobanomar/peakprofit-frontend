import React from "react";

const ChallengeSelector = ({ options, selected, onSelect }) => {
  return (
    <div className="space-y-2 space-x-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`px-8 py-2 w-fit border  rounded-md ${
            selected === option
              ? "bg-transparent text-white  border-[#CF59FF]"
              : "bg-[#463858] text-white border-neutral-500"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ChallengeSelector;
