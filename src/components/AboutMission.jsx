import "./styles/aboutMission.css";
import { useTranslation } from "react-i18next";

export default function AboutMission(){
    const { t } = useTranslation();
    return(
        <>
        <div className="missiom-container">
            <div className="mission-content">
                <h1 className="title-mission">{t("aboutMissionTitle")}</h1>
                <p className="para-mission">{t("aboutMissionIntro")}</p>
                <ul>
                    <li>{t("aboutMissionList1")}</li>
                    <li>{t("aboutMissionList2")}</li>
                    <li>{t("aboutMissionList3")}</li>
                    <li>{t("aboutMissionList4")}</li>
                </ul>
                <p>{t("aboutMissionOutro")}</p>
            </div>
            <div className="missio-img">
                <img src="seeflix.png" alt={t("logoAlt")} />
            </div>
        
        </div>
        

        </>
    )
}