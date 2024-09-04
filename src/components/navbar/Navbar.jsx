import React from "react";
import Logo from "@components/navbar/Logo";
import NavbarItem from "@components/navbar/NavbarItem";
import styles from "@components/navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrap}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.header__content}>
                <Logo />
                <ul className={styles.header__nav}>
                  <NavbarItem href="/home">Inicio</NavbarItem>
                  <NavbarItem href="/movies">Peliculas</NavbarItem>
                  <NavbarItem href="/series">Series</NavbarItem>
                  <NavbarItem href="/help">Ayuda</NavbarItem>
                </ul>
                <div className={styles.header__auth}>
                  <button className={styles["header__search-btn"]} type="button">
                    <i className="icon ion-ios-search"></i>
                  </button>

                  <a href="signin.html" className={styles["header__sign-in"]}>
                    <i className="icon ion-ios-log-in"></i>
                    <span>Iniciar sesión</span>
                  </a>
                </div>
                <button className={styles.header__btn} type="button">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form action="#" className={styles.header__search}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles["header__search-content"]}>
                <input type="text" id="btnBuscar" placeholder="Buscar película, serie o documental..." />

                <button type="button">Buscar</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </header>
  );
};

export default Navbar;
