import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavbarItem = ({ href, children }) => {
  return (
    <li className="header__nav-item">
      <Link to={href} className="header__nav-link">
        {children}
      </Link>
    </li>
  );
};

NavbarItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavbarItem;
