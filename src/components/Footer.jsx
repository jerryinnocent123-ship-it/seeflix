import { Link } from "react-router-dom";
import "./styles/footer.css";

function Footer() {
  return (
    <div className="footer-containers">
      <div className="logo-footer">
        <img src="seeflix.png" alt="SeeFlix Logo" />
        <h5>Seeflix</h5>
      </div>

      <div className="navBar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <p className="p-footer">
        Copyright © 2026. All rights reserved by seeflix.
      </p>
    </div>
  );
}

export default Footer;