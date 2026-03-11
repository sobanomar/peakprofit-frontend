// src/pages/FAQCategoryPage.tsx
import React from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { useFAQ } from "../../context/FAQContext";
import { slugify } from "../../utils/slugify";
import { HiOutlineChevronRight } from "react-icons/hi";

const CollectionPage = () => {
  const { slug } = useParams();
  const faqSections = useFAQ();

  const category = faqSections.find(
    (section) => slugify(section.title) === slug,
  );

  if (!category) {
    return (
      <div className="p-10 text-center text-white">
        <h2 className="text-xl font-semibold">Category not found</h2>
        <Link to="/faq" className="text-brand underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl relative mx-auto"
    >
      {/* Breadcrumb */}
      <nav className="mb-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/60">
        <Link to="/faq" className="hover:underline text-brand-100">
          All Collections
        </Link>
        <span>&gt;</span>
        <span className="text-white/75">{category.title}</span>
      </nav>

      {/* Heading */}
      <h1 className="mb-1 text-2xl sm:text-3xl font-bold text-white">
        {category.title}
      </h1>
      <p className="mb-3 text-white/75">{category.description}</p>
      <p className="mb-6 inline-flex rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs sm:text-sm font-medium text-brand-100">
        {category.articles.length} articles
      </p>

      {/* Article List */}
      <div className="overflow-hidden rounded-2xl border border-brand/10 bg-brand/[0.04] backdrop-blur-sm">
        {category.articles.map((article, idx) => (
          <Link
            to={`/collections/${slug}/${slugify(article.title)}`}
            key={idx}
            className="group flex items-center justify-between border-b border-white/10 px-5 py-4 text-white transition-colors duration-200 last:border-b-0 hover:bg-brand/[0.08]"
          >
            <span className="pr-4 text-sm sm:text-base">{article.title}</span>
            <HiOutlineChevronRight className="text-brand transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default CollectionPage;
