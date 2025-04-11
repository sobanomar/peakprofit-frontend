import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router";
import { slugify } from "../../utils/slugify";
import { useFAQ } from "../../context/FAQContext"; // adjust the path as needed
import SearchBar from "./SearchBar";

const ArticleListing = () => {
  const faqSections = useFAQ(); // now pulling from context

  return (
    <div className="min-h-screen bg-white p-6 z-50">
      <div className="max-w-3xl mx-auto relative text-center text-white mb-5">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
          Advice and answers from the GetCryptoFunded Team
        </h1>
      </div>

      {/* Search Bar */}
      <SearchBar />

      <div className="max-w-3xl relative mx-auto space-y-6">
        {faqSections.map((section, idx) => {
          const slug = slugify(section.title);

          return (
            <Link to={`/collections/${slug}`} key={idx}>
              <div className="flex items-center bg-white rounded-lg shadow-md p-6 space-x-6 mb-4 border border-neutral-200 hover:border-[#63c0e0] transition-all duration-300 cursor-pointer">
                <div>{section.icon}</div>
                <div>
                  <h2 className="text-lg font-semibold hover:text-[#63c0e0] transition-colors duration-200">
                    {section.title}
                  </h2>
                  <p className="text-gray-600">{section.description}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {section.articles?.length ?? 0} articles
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleListing;
