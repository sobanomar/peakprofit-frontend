import React from "react";

const AccountSizeSelector = ({ sizes, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className={`px-8 py-2 border rounded-md ${
            selected === size
              ? "bg-transparent text-white border border-[#CF59FF]"
              : "bg-[#463858] text-white border-neutral-500"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default AccountSizeSelector;
