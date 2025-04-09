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
    <div className="mb-4">
      <div className="flex items-center gap-2 text-xl  font-semibold mb-1">
        <span className="mb-2">{copied ? "Copied!" : label}</span>
        <button
          onClick={handleCopy}
          className="text-gray-500 hover:text-purple-400 transition"
        >
          <FiClipboard size={20} />
        </button>
      </div>
      <div className="bg-[#eeeeee] font-bold p-4 rounded-full text-base">
        {value}
      </div>
    </div>
  );
};
export default CopyField;
