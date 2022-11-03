import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Layout: React.FC<{}> = () => {
  return (
    <div className="d-flex flex-column">
      <div className="container flex-grow-1">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
