import React from "react";

const AddOnsSelector = ({ addOns, selected, onToggle }) => {
  return (
    <div className="mt-6">
      <h3 className="text-white font-bold mb-2">Add-ons</h3>
      {addOns.map((addon) => {
        const isChecked = selected.includes(addon.id);
        return (
          <div
            key={addon.id}
            className={`flex items-center justify-between mb-3 px-4 py-3 text-sm text-white transition-all duration-400 border 
              ${
                isChecked
                  ? "bg-[#3C2053] border-[#CF59FF] rounded-full"
                  : "bg-[#463858] border-neutral-500 rounded-md"
              }`}
          >
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => onToggle(addon.id)}
                className={`appearance-none w-5 h-5 border-2 transition-all duration-200 
                  ${
                    isChecked
                      ? "bg-[#CF59FF] border-[#CF59FF] rounded-md"
                      : "bg-[#5E526E] border-white rounded-md"
                  }`}
              />
              {addon.name}
            </label>
            <span className="text-sm font-semibold text-black bg-white rounded-full px-3 py-0.5">
              {addon.price}%
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default AddOnsSelector;
