import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@components/navbar/Logo";
import NavbarItem from "@components/navbar/NavbarItem";

const Navbar = () => {
  const navigate = useNavigate();

  const onClick = () => {
    if (document.getElementById("txtBuscar").value.trim()) {
      document.querySelector(".header__search-btn").click();
      navigate("/result", { state: { cadenaBusqueda: document.getElementById("txtBuscar").value } });
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (document.getElementById("txtBuscar").value.trim()) {
        document.querySelector(".header__search-btn").click();
        navigate("/result", { state: { cadenaBusqueda: document.getElementById("txtBuscar").value } });
      }
    }
  };

  return (
    <header className="header">
      <div className="header__wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                <Logo />
                <ul className="header__nav">
                  <NavbarItem href="/home">Inicios</NavbarItem>
                  <NavbarItem href="/movies">Peliculas</NavbarItem>
                  <NavbarItem href="/series">Series</NavbarItem>
                </ul>
                <div className="header__auth">
                  <button id="btnBuscar" className="header__search-btn" type="button">
                    <i className="icon ion-ios-search"></i>
                  </button>

                  <a className="header__sign-in">
                    <i className="icon ion-ios-log-in"></i>
                    <span>Iniciar sesión</span>
                  </a>
                </div>
                <button id="btnMenu" className="header__btn" type="button">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form action="#" className="header__search">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__search-content">
                <input id="txtBuscar" type="text" onKeyDown={handleKeyDown} placeholder="Buscar película, serie o documental..." />
                <button type="button" onClick={onClick}>
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </header>
  );
};

export default Navbar;
