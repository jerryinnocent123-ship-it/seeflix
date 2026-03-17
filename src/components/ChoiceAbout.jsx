import "./choiceAbout.css"
import { Film } from 'lucide-react';
import { MonitorSmartphone } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Hd } from 'lucide-react';


export default function ChoiceAbout(){
    return(
        <>
        <div className="choose-container">
            <h1 className="title-choice">Why Choose Seeflix?</h1>
            <div className="choose-content">


                <div className="card">
                    <Film size={64}/>
                    <h4>
                        Large catalogue
                    </h4>
                    <p>
                        Découvrez une grande variété de films et séries provenant 
                        de différents genres : action, comédie, drame, aventure, 
                        science-fiction et bien plus.
                    </p>
                </div>

                <div className="card">
                    <Zap size={64}/>

                    <h4>
                        Interface simple et rapide
                    </h4>
                    <p>
                       Notre interface est conçue pour être intuitive et facile à utiliser, permettant aux utilisateurs de trouver rapidement le contenu qu’ils recherchent.
                    </p>
                </div>

                <div className="card">
                    <MonitorSmartphone size={64}/>
                    <h4>
                        Expérience moderne
                    </h4>
                    <p>
                       SeeFlix est conçu pour fonctionner parfaitement sur ordinateur, tablette et mobile.
                    </p>
                </div>

                <div className="card">
                   <Hd size={64}/>
                    <h4>
                        Plateforme en évolution
                    </h4>
                    <p>
                        Nous travaillons constamment à améliorer SeeFlix en ajoutant de nouvelles fonctionnalités et de nouveaux contenus.
                    </p>
                </div>
            </div>
        </div>
        
        
        </>


    )
}