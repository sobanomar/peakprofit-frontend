import { Outlet } from "react-router";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FAQLayout = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default FAQLayout;
