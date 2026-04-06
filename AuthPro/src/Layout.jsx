import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./componets/Header";
import { Footer } from "./componets/Footer";

export function Layout() {
  return (
    <div className="container-wrapper">
      {/* <button className="menu-btn">
        <img src={menu} alt="Image not found" />
      </button> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
