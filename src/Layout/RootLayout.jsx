import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CurrentPath from "../utilities/CurrentPath";


const RootLayout = () => {
  
  return (
    <>
      <Header />

      <Navbar />
      <hr className="text-gray-300" />
      <CurrentPath />
      <div className="container relative ">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
