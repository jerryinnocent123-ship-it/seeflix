import "./styles/hero.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <div className="hero-container">
        <div className="hero-contents">
          {/* titre nan hero a */}
          <h1 className="hero-title">{t("welcomeTitle")}</h1>

          {/* sous titr la */}
          <p className="sub-title">{t("heroSubtitle")}</p>

          {/* bouton nan hero a */}
          <Link to="/media" className="btn-hero">{t("getStarted")}</Link>
        </div>
      </div>
    </>
  );
}

export default Hero;