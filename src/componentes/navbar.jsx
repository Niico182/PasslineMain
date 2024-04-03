import React, { useEffect, useState } from "react";
import { getTopNav } from "../data/navbar";
import "../css/home.css";
import PopupLogin from "./PopupLogin";
import PopupRegister from "./popupRegister";

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  const openLoginPopup = () => {
    setIsLoginPopupOpen(true);
    setIsRegisterPopupOpen(false); // Cerrar el popup de registro si está abierto
  };

  const openRegisterPopup = () => {
    setIsRegisterPopupOpen(true);
    setIsLoginPopupOpen(false); // Cerrar el popup de inicio de sesión si está abierto
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  const closeRegisterPopup = () => {
    setIsRegisterPopupOpen(false);
  };

  const onToggle = () => {
    setCollapse((prevCollapse) =>
      prevCollapse === "nav__menu"
        ? "nav__menu nav__collapse"
        : "nav__menu"
    );
    setToggleIcon((prevIcon) =>
      prevIcon === "toggler__icon" ? "toggler__icon toggle" : "toggler__icon"
    );
  };

  return (
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <a href="#" className="nav__brand">
            Logo
          </a>
          <ul className={collapse}>
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <a
                  href="#"
                  className="nav__link"
                  onClick={
                    item.label === "INICIAR SESION"
                      ? openLoginPopup
                      : openRegisterPopup
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
        </nav>
      </div>
      {isLoginPopupOpen && <PopupLogin onClose={closeLoginPopup} />}
      {isRegisterPopupOpen && <PopupRegister onClose={closeRegisterPopup} />}
    </div>
  );
};

export default Navbar;
