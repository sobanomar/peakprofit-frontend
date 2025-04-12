import React from "react";
import { FaCircle } from "react-icons/fa";

const InfoCard = ({
  topContent,
  isImage = false,
  title,
  description,
  bottomContent,
  align = "center",
  status,
}) => {
  return (
    <div className="bg-[#2E1D3D] rounded-2xl p-6 shadow-md text-white max-w-sm w-full">
      <div
        className={`flex ${
          align === "left" ? "justify-start" : "justify-center"
        } mb-4 relative`}
      >
        {isImage ? (
          <div className="relative">
            {status && (
              <div className="flex justify-center mb-2">
                <span className="text-green-600 gap-2 flex items-center">
                  <FaCircle size={10} />
                  {status}
                </span>
              </div>
            )}
            <img src={topContent} alt={title} className="h-16 object-contain" />
          </div>
        ) : (
          <div className="text-4xl font-bold text-purple-300">{topContent}</div>
        )}
      </div>

      <div className={align === "left" ? "text-left" : "text-center"}>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-2">{description}</p>
      </div>

      {bottomContent && (
        <div className="mt-4 flex justify-center">{bottomContent}</div>
      )}
    </div>
  );
};

export default InfoCard;
