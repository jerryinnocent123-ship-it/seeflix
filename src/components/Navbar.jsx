import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";

function NavBar() {
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
        <img src="seeflix.png" alt="SeeFlix Logo" />
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
            <Link to={"/"}>Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to={"/media"}>Media</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to={"/about"}>About</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;