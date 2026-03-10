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
          relative flex items-center rounded-2xl border border-brand-400/25 bg-brand-400/10 text-white
          shadow-[0_18px_45px_-30px_rgba(51,228,246,0.65)] backdrop-blur-lg transition-all duration-300
          focus-within:border-brand-400/45 focus-within:bg-brand-400/15
          ${
            SingleCollection
              ? "w-full mt-16 mb-4"
              : "w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mt-0 mb-10"
          }
        `}
      >
        <div className="absolute left-4 text-brand">
          <FiSearch size={19} />
        </div>

        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for articles..."
          className="w-full bg-transparent p-4 pl-12 pr-10 text-white placeholder-white/60 focus:outline-none"
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 text-white/70 hover:text-brand transition-colors"
          >
            <IoMdClose size={20} />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
