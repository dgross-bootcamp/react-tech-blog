import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC<{}> = () => {
  return (
    <footer className="text-center bg-dark mt-5">
      <img src="ttb-logos_white.png" alt="Logo" className={`${styles.Logo}`} />
    </footer>
  );
};

export default Footer;
