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
      <span key={i} className="bg-gray-200 rounded px-1">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const SearchResults = () => {
  const { q } = useParams();
  const faqSections = useFAQ();

  // Gather matching articles and filter out duplicates
  const seen = new Set();
  const results = faqSections.flatMap((section) =>
    section.articles
      .filter(
        (article) =>
          (article.title.toLowerCase().includes(q.toLowerCase()) ||
            article.description.toLowerCase().includes(q.toLowerCase())) &&
          !seen.has(article.title + article.description) && // Check for duplicates
          seen.add(article.title + article.description) // Add to seen if not already
      )
      .map((article) => ({
        ...article,
        sectionTitle: section.title,
      }))
  );

  return (
    <>
      <div className="px-10 sm:px-0">
        <SearchBar />
      </div>
      <div className="max-w-4xl relative mx-auto px-4 py-20">
        <h2 className="text-lg font-semibold text-gray-600 mb-6">
          Search results for: <span className="font-bold text-black">{q}</span>
        </h2>

        {results.map((article, idx) => (
          <Link
            key={idx}
            // to={`/collections/${slugify(article.sectionTitle)}/${slugify(
            //   article.title
            // )}`}
            to={"#"}
            className="block border border-gray-200 hover:border-teal-500 rounded-xl px-6 py-4 mb-4 transition-colors duration-200 group"
          >
            <h3 className="text-lg font-semibold group-hover:text-teal-600 mb-1">
              {highlightQuery(article.title, q)}
            </h3>
            <p className="text-sm text-gray-600">
              {highlightQuery(article.description, q)}
            </p>
          </Link>
        ))}

        {results.length === 0 && (
          <p className="text-gray-500">No articles matched your search.</p>
        )}
      </div>
    </>
  );
};

export default SearchResults;
