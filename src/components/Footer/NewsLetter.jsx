import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-white">
        SIGN UP FOR EMAIL UPDATES
      </h3>
      <p className="text-sm text-[#888794] font-semibold mb-4">
        Sign up with your email address to receive news and updates
      </p>

      <div className="bg-white py-1 px-1 rounded-full overflow-hidden flex items-center max-w-md">
        <input
          type="email"
          placeholder="Your Email Address"
          className="flex-grow px-5 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none rounded-l-full"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-[#D56BFF] text-white text-sm font-semibold px-6 py-3 rounded-full"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
