import React from "react";
import styles from "@components/navbar/Navbar.module.css";

const Logo = () => {
  return (
    <a href="index.html" className={styles.header__logo}>
      <img src="img/logo.svg" alt="" />
    </a>
  );
};

export default Logo;
