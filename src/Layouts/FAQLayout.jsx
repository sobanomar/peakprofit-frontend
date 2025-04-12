import { Outlet } from "react-router";
import FAQAllCollectionsHeader from "../components/FAQAllCollectionsHeader";
import FAQFooter from "../components/FAQFooter";
import React from "react";

const FAQLayout = () => {
  return (
    <div className="bg-white min-h-screen relative">
      <FAQAllCollectionsHeader />
      <div className="z-50 pt-24">
        <Outlet />
      </div>
      <FAQFooter />
    </div>
  );
};

export default FAQLayout;
