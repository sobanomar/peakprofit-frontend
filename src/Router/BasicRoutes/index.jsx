import React from "react";
import { Route, Routes } from "react-router";
import Home from "../../pages/Home";

const BasicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default BasicRoutes;
