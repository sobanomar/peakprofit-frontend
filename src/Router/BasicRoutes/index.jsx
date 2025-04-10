import React from "react";
import { Route, Routes } from "react-router";
import Home from "../../pages/Home";
import MainLayout from "../../Layouts/MainLayout";
import Evaluations from "../../pages/Evaluations";

const BasicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="evaluation" element={<Evaluations />} />
      </Route>
    </Routes>
  );
};

export default BasicRoutes;
