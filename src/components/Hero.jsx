import "./styles/hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-contents">
          {/* titre nan hero a */}
          <h1 className="hero-title">
            Welcome to Seeflix
          </h1>

          {/* sous titr la */}
          <p className="sub-title">
            Streaming is no Longer a luxury, it’s Lifestyle
          </p>

          {/* bouton nan hero a */}
          <Link to={"/media"} className="btn-hero"> Get Started </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;