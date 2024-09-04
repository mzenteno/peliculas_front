import React from "react";
import PropTypes from "prop-types";
import styles from "@components/navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const NavbarItem = ({ href, children }) => {
  return (
    <li className={styles["header__nav-item"]}>
      <Link to={href} className={styles["header__nav-link"]}>
        {children}
      </Link>
    </li>
  );
};

NavbarItem.propTypes = {
  href: PropTypes.string.isRequired, // href es requerido y debe ser una cadena
  children: PropTypes.node.isRequired, // children es requerido y puede ser cualquier cosa que React pueda renderizar
};

export default NavbarItem;
