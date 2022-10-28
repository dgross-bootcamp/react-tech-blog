import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Layout: React.FC<{}> = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
