import React from "react";
import imgLogo from "/img/logo.svg";
import styles from '@components/navbar/Navbar.module.css';

const Logo = () => {
  return (
    <a href="index.html" className={styles.header__logo}>
      <img src={imgLogo} alt="" />
    </a>
  );
};

export default Logo;
