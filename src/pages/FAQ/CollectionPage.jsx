// src/pages/FAQCategoryPage.tsx
import React from "react";
import { useParams, Link } from "react-router";
import { useFAQ } from "../../context/FAQContext";
import { slugify } from "../../utils/slugify";
import { HiOutlineChevronRight } from "react-icons/hi";

const CollectionPage = () => {
  const { slug } = useParams();
  const faqSections = useFAQ();

  const category = faqSections.find(
    (section) => slugify(section.title) === slug
  );

  if (!category) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">Category not found</h2>
        <Link to="/" className="text-blue-500 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl relative mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:underline text-gray-400">
          All Collections
        </Link>{" "}
        &gt; <span className="text-black">{category.title}</span>
      </nav>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-1">{category.title}</h1>
      <p className="text-gray-500 mb-2">{category.description}</p>
      <p className="text-sm text-gray-400 mb-6">
        {category.articles.length} articles
      </p>

      {/* Article List */}
      <div className="bg-white border border-gray-200 rounded-xl divide-y">
        {category.articles.map((article, idx) => (
          <Link
            to={`/faq/${slug}/${slugify(article.title)}`}
            key={idx}
            className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition"
          >
            <span className="text-black">{article.title}</span>
            <HiOutlineChevronRight className="text-blue-500" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
