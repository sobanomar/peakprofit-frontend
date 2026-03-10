import React from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { useFAQ } from "../../context/FAQContext";
import { slugify } from "../../utils/slugify";
import FAQArticleTextParser from "../../utils/FAQArticleTextParser";

const ArticlePage = () => {
  const { slug, articleSlug } = useParams();
  const faqSections = useFAQ();

  const category = faqSections.find(
    (section) => slugify(section.title) === slug,
  );

  const article = category?.articles.find(
    (art) => slugify(art.title) === articleSlug,
  );

  if (!category || !article) {
    return (
      <div className="p-10 text-center text-white">
        <h2 className="text-xl font-semibold">Article not found</h2>
        <Link to="/faq" className="text-brand underline">
          Back to FAQ
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto px-4 sm:px-6"
    >
      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/60">
        <Link to="/faq" className="hover:underline text-brand-100">
          All Collections
        </Link>
        {category.articles.length > 1 && (
          <>
            <span>&gt;</span>
            <Link to={`/collections/${slug}`} className="hover:underline text-white/75">
              {category.title}
            </Link>
          </>
        )}
        <span>&gt;</span>
        <span className="text-white/75">{article.title}</span>
      </nav>

      <div className="rounded-2xl border border-brand/10 bg-brand/[0.04] p-5 sm:p-7 backdrop-blur-sm">
        {/* Article Title */}
        <h1 className="mb-2 text-2xl sm:text-3xl font-bold text-white">
          {article.title}
        </h1>
        <p className="mb-6 text-xs sm:text-sm text-brand-200/85">
          {article.lastUpdated}
        </p>

        {/* Description */}
        <FAQArticleTextParser
          text={article.description}
          className="mb-2 text-sm sm:text-base leading-7 text-white/80"
        />
      </div>

      {/* Feedback Box */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm">
        <p className="mb-4 font-medium text-white/85">
          Did this answer your question?
        </p>
        <div className="flex justify-center gap-4 text-3xl">
          <button className="rounded-full bg-brand/10 px-3 py-2 hover:scale-110 transition-all duration-300">
            😞
          </button>
          <button className="rounded-full bg-brand/10 px-3 py-2 hover:scale-110 transition-all duration-300">
            😐
          </button>
          <button className="rounded-full bg-brand/10 px-3 py-2 hover:scale-110 transition-all duration-300">
            😃
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticlePage;
