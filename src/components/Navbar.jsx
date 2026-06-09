import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import DarkMode from "./DarkMode";
import "./styles/nav.css";

function NavBar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="nav-container">
      {/* Logo nan nav la */}
      <div className="logo">
        <img src="seeflix.png" alt={t("logoAlt")} />
        <h5>Seeflix</h5>
      </div>

      {/* Menu Hamburger pou mobil */}
      <div className={`menu-icon ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li onClick={closeMenu}>
            <Link to="/">{t("navHome")}</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/media">{t("navMedia")}</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/about">{t("navAbout")}</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/contact">{t("navContact")}</Link>
          </li>
        </ul>
      </nav>
      <div className="nav-controls">
        <DarkMode />
        <LanguageSwitcher className="language-switcher" />
      </div>
    </div>
  );
}

export default NavBar;