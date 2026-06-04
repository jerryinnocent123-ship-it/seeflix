import "./styles/visionAbout.css";
import { useTranslation } from "react-i18next";

export default function VisionAbout(){
    const { t } = useTranslation();
    return(
        <>
        <div className="vision-container">

            <div className="vision-content">
            <h1>{t("visionTitle")}</h1>
            <p>{t("visionParagraph")}</p>
        
            </div>
        </div>
        
       </>
    )
}