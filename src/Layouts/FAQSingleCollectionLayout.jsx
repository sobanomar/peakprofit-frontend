import React from "react";
import { Outlet } from "react-router";
import FAQFooter from "../components/FAQFooter";
import FAQSingleCollectionsHeader from "../components/FAQSingleCollectionHeader";

const FAQSingleCollectionLayout = () => {
  return (
    <div className="bg-white min-h-screen relative">
      <FAQSingleCollectionsHeader />
      <div className="z-50 pt-10 pb-20">
        <Outlet />
      </div>
      <FAQFooter />
    </div>
  );
};

export default FAQSingleCollectionLayout;
