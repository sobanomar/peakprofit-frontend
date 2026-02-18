import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import GiveawayModal from "../components/GiveawayModal";

const MainLayout = () => {
  return (
    <div>
      <GiveawayModal />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
