import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC<{}> = () => {
  return (
    <>
      <header className="py-4">
        <div className="row flex-nowrap justify-content-center align-items-center">
          <div className="col-3">
            <Link to="/" className="text-muted">
              Home
            </Link>
          </div>
          <div className="col-6 text-center">
            <Link to="/" className="navbar-brand">
              <img
                src="ttb-logos_transparent.png"
                alt="Logo"
                className={`${styles.Logo}`}
              />
            </Link>
          </div>
          <div className="col-3 d-flex justify-content-around align-items-center">
            <Link to="/settings" className="btn btn-sm btn-outline-secondary">
              Settings
            </Link>
            <Link to="/profile" className="btn btn-sm btn-outline-secondary">
              Profile
            </Link>
            <Link to="/login" className="btn btn-sm btn-outline-secondary">
              Login
            </Link>
            <Link to="/signup" className="btn btn-sm btn-outline-secondary">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
