import "./styles/choiceAbout.css";
import { Film } from 'lucide-react';
import { MonitorSmartphone } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Hd } from 'lucide-react';
import { useTranslation } from 'react-i18next';


export default function ChoiceAbout(){
    const { t } = useTranslation();
    return(
        <>
        <div className="choose-container">
            <h1 className="title-choice">{t("choiceTitle")}</h1>
            <div className="choose-content">


                <div className="card">
                    <Film size={64}/>
                    <h4>{t("choiceCard1Title")}</h4>
                    <p>{t("choiceCard1Text")}</p>
                </div>

                <div className="card">
                    <Zap size={64}/>

                    <h4>{t("choiceCard2Title")}</h4>
                    <p>{t("choiceCard2Text")}</p>
                </div>

                <div className="card">
                    <MonitorSmartphone size={64}/>
                    <h4>{t("choiceCard3Title")}</h4>
                    <p>{t("choiceCard3Text")}</p>
                </div>

                <div className="card">
                   <Hd size={64}/>
                    <h4>{t("choiceCard4Title")}</h4>
                    <p>{t("choiceCard4Text")}</p>
                </div>
            </div>
        </div>
        
        
        </>


    )
}