import React from "react";
import { useParams, Link } from "react-router";
import { useFAQ } from "../../context/FAQContext";
import { slugify } from "../../utils/slugify";

const ArticlePage = () => {
  const { slug, articleSlug } = useParams();
  const faqSections = useFAQ();

  const category = faqSections.find(
    (section) => slugify(section.title) === slug
  );

  const article = category?.articles.find(
    (art) => slugify(art.title) === articleSlug
  );

  if (!category || !article) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">Article not found</h2>
        <Link to="/faq" className="text-blue-500 underline">
          Back to FAQ
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        {/* <Link to="/faq" className="hover:underline text-black"> */}
        <Link className="hover:underline text-black">
          All Collections
        </Link> &gt;{" "}
        <Link
          to={`/collections/${slug}`}
          className="hover:underline text-black"
        >
          {category.title}
        </Link>{" "}
        &gt; <span className="text-gray-600">{article.title}</span>
      </nav>

      {/* Article Title */}
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>

      {/* Last Updated */}
      <p className="text-sm text-gray-500 mb-6">
        Updated {article.lastUpdated}
      </p>

      {/* Description */}
      <p className="mb-10 whitespace-pre-line">{article.description}</p>

      {/* Feedback Box */}
      <div className="bg-gray-100 p-6 rounded-xl text-center">
        <p className="mb-4 text-gray-800 font-medium">
          Did this answer your question?
        </p>
        <div className="flex justify-center gap-4 text-3xl">
          <button className="hover:scale-150 transition-all duration-300">
            😞
          </button>
          <button className="hover:scale-150 transition-all duration-300">
            😐
          </button>
          <button className="hover:scale-150 transition-all duration-300">
            😃
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
