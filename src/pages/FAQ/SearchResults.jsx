import React from "react";
import { useParams } from "react-router";
import { useFAQ } from "../../context/FAQContext";
import { Link } from "react-router";
import { slugify } from "../../utils/slugify";
import SearchBar from "./SearchBar";

// Function to highlight the query
const highlightQuery = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={i} className="bg-gray-100 text-black rounded px-1">
        {part}
      </span>
    ) : (
      part
    ),
  );
};

const SearchResults = () => {
  const { q } = useParams();
  const faqSections = useFAQ();
  const searchQuery = q ?? "";

  // Gather matching articles and filter out duplicates
  const seen = new Set();
  const results = faqSections.flatMap((section) =>
    section.articles
      .filter(
        (article) =>
          (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase())) &&
          !seen.has(article.title + article.description) && // Check for duplicates
          seen.add(article.title + article.description), // Add to seen if not already
      )
      .map((article) => ({
        ...article,
        sectionTitle: section.title,
      })),
  );

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 pt-32 sm:px-0">
        <SearchBar emptySubmitTo={-1} initialQuery={searchQuery} />
      </div>
      <div className="max-w-6xl relative mx-auto px-4 py-0">
        <h2 className="text-lg font-semibold text-gray-400 mb-6">
          Search results for:{" "}
          <span className="font-bold text-white">{searchQuery}</span>
        </h2>

        {results.map((article, idx) => (
          <Link
            key={idx}
            to={`/collections/${slugify(article.sectionTitle)}/${slugify(
              article.title,
            )}`}
            className="block border-[0.5px] bg-gray-900/80 hover:bg-brand-900/50 border-gray-200 hover:border-brand-400 rounded-xl px-6 py-4 mb-4 transition-colors duration-200 group"
          >
            <h3 className="text-lg text-white font-semibold group-hover:text-brand-500 mb-1">
              {highlightQuery(article.title, searchQuery)}
            </h3>
            <p className="text-sm text-gray-400">
              {highlightQuery(article.description, searchQuery)}
            </p>
          </Link>
        ))}

        {results.length === 0 && (
          <p className="text-gray-400">No articles matched your search.</p>
        )}
      </div>
    </>
  );
};

export default SearchResults;
