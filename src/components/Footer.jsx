import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./styles/footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer-containers">
      <div className="logo-footer">
        <img src="seeflix.png" alt={t("logoAlt")} />
        <h5>Seeflix</h5>
      </div>

      <div className="navBar">
        <nav>
          <ul>
            <li>
              <Link to="/">{t("navHome")}</Link>
            </li>
            <li>
              <Link to="/media">{t("navMedia")}</Link>
            </li>
            <li>
              <Link to="/about">{t("navAbout")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("navContact")}</Link>
            </li>
          </ul>
        </nav>
      </div>

      <p className="p-footer">{t("copyright")}</p>
    </div>
  );
}

export default Footer;