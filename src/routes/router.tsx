import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import ProkteRoute from "../pages/protektRoute/ProkteRoute";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to={"/admin"} />}></Route>
        <Route element={<ProkteRoute />}>
          <Route path="/admin" element={<Layout />}>
            <Route path="/admin" element={<Home />} />
            <Route path="/admin/:streat/:id" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
