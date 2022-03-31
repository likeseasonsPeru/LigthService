import React from "react";
import { Routes, Route } from "react-router-dom";
import Calculator from "../pages/calculator/Calculator";
import Home from "../pages/home/home.js";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/asd" element={<Home />} />
        <Route path="/" element={<Calculator />} />
      </Routes>
    </>
  );
};
