import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/home"} className="header__nav-link">
      <img src="/img/logo.svg" alt="" />
    </Link>
  );
};

export default Logo;
