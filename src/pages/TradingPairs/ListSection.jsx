import React from "react";

const ListSection = ({ title, sectionArray }) => {
  return (
    <div>
      <h1 className="text-2xl px-2 text-purple-400 underline underline-offset-12">
        {title}
      </h1>
      <div className="w-full flex flex-wrap justify-center gap-3 my-8">
        {sectionArray.map((item, index) => (
          <div
            style={{ boxShadow: "0px 0px 8px rgba(192, 132, 252, 0.3)" }} // purple-400 with 40% opacity
            className="w-fit border border-purple-400 p-3 px-5 rounded-md font-semibold md:font-bold bg-gradient-to-r from-gray-700/20 to-gray-500/20 text-sm md:text-base"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSection;
