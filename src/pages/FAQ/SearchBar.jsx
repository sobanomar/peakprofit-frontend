import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router";

const SearchBar = ({ SingleCollection }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleClear = () => setQuery("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/faq/search/${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className={`
          relative flex items-center text-white rounded-2xl hover:shadow-xl 
          transition-all duration-300 backdrop-filter backdrop-blur-lg bg-[rgba(127,13,218,0.1)] shadow-md
          ${
            SingleCollection
              ? "w-full mt-16 mb-4"
              : "w-full sm:w-[75%] md:w-[50%] lg:w-[25%] mt-0 mb-10"
          }
        `}
      >
        <div className="absolute left-4">
          <FiSearch size={20} />
        </div>

        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for articles..."
          className="w-full pl-12 pr-10 p-4 text-white placeholder-white bg-transparent focus:outline-none"
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <IoMdClose size={20} />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
