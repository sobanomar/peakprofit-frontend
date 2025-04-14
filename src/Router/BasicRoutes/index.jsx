import React from "react";
import { Route, Routes } from "react-router";
import Home from "../../pages/Home";
import MainLayout from "../../Layouts/MainLayout";
import Evaluations from "../../pages/Evaluations";
import FAQListing from "../../pages/FAQ";
import FAQLayout from "../../Layouts/FAQLayout";
import { FAQProvider } from "../../context/FAQContext";
import CollectionPage from "../../pages/FAQ/CollectionPage";
import Contact from "../../pages/Contact";
import FAQSingleCollectionLayout from "../../Layouts/FAQSingleCollectionLayout";
import ArticlePage from "../../pages/FAQ/ArticlePage";
import SearchResults from "../../pages/FAQ/SearchResults";
import { ScrollToTopWrapper } from "../../utils/ScrollToTop";
import TradingPairs from "../../pages/TradingPairs";

const BasicRoutes = () => {
  return (
    <FAQProvider>
      <ScrollToTopWrapper>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="evaluation" element={<Evaluations />} />
            <Route path="contact" element={<Contact />} />
            <Route path="trading-pairs" element={<TradingPairs />} />
          </Route>

          <Route path="/faq" element={<FAQLayout />}>
            <Route index element={<FAQListing />} />
            <Route path="search/:q" element={<SearchResults />} />
          </Route>
          <Route path="/collections" element={<FAQSingleCollectionLayout />}>
            <Route path=":slug" element={<CollectionPage />} />
            <Route path=":slug/:articleSlug" element={<ArticlePage />} />
          </Route>
        </Routes>
      </ScrollToTopWrapper>
    </FAQProvider>
  );
};

export default BasicRoutes;
