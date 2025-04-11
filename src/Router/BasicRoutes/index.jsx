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

const BasicRoutes = () => {
  return (
    <FAQProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="evaluation" element={<Evaluations />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/faq" element={<FAQLayout />}>
          <Route index element={<FAQListing />} />
          <Route path="collections/:slug" element={<CollectionPage />} />
        </Route>
      </Routes>
    </FAQProvider>
  );
};

export default BasicRoutes;
