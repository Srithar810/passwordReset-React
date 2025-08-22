import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Register from "./Register";

const Body = () => {
  return (
    <div>
      <NavBar />
      {/* <Register></Register> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
