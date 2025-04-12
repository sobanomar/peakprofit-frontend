// FAQContext.tsx (or .js)
import React, { createContext, useContext } from "react";
import { FAQArticles } from "../../articlesData";

const FAQContext = createContext([]);

export const FAQProvider = ({ children }) => {
  return (
    <FAQContext.Provider value={FAQArticles}>{children}</FAQContext.Provider>
  );
};

export const useFAQ = () => useContext(FAQContext);
