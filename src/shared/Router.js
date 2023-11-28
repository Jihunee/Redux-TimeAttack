import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Header from "../components/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
