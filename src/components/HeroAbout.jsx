import "./styles/heroAbout.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HeroAbout(){
    const { t } = useTranslation();
    return(
       <>
       <div className="hero-cont">
        <div className="desc"> 
             <h1 className="title-about">{t("aboutTitle")}</h1>
            <p className="desc-about">{t("aboutDescription")}</p>

            <Link to="/contact" className="btn-hero-about">{t("aboutContactButton")}</Link>
           
                
                
      </div>

      <div className="image-about">
        <img src="img-about-hero.png" alt={t("aboutHeroAlt")} />
      </div>
               

       </div>
       
       
       </>
    )
}
