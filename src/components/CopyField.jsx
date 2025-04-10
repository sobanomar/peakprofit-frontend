import React, { useState } from "react";
import { FiClipboard } from "react-icons/fi";

const CopyField = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="mb-2 md:mb-3 lg:mb-4">
      <div className="flex items-center gap-1 md:gap-2 text-base md:text-lg lg:text-xl font-semibold mb-0.5 md:mb-1">
        <span className="mb-1 md:mb-2">{copied ? "Copied!" : label}</span>
        <button
          onClick={handleCopy}
          className="text-gray-500 hover:text-purple-400 transition"
        >
          <FiClipboard size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
        </button>
      </div>
      <div className="bg-[#eeeeee] font-bold p-2 md:p-3 lg:p-4 rounded-full text-xs md:text-sm lg:text-base">
        {value}
      </div>
    </div>
  );
};

export default CopyField;
