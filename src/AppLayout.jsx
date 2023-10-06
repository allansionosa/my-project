import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
