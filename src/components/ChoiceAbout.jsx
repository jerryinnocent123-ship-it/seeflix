import "./choiceAbout.css"


export default function ChoiceAbout(){
    return(
        <>
        <div className="choose-container">
            <h1>Why Choose Seeflix?</h1>
            <div className="choose-content">


                <div className="card">
                    {/* icon */}
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
                    {/* icon */}
                    <h4>
                        Interface simple et rapide
                    </h4>
                    <p>
                       Notre interface est conçue pour être intuitive et facile à utiliser, permettant aux utilisateurs de trouver rapidement le contenu qu’ils recherchent.
                    </p>
                </div>

                <div className="card">
                    {/* icon */}
                    <h4>
                        Expérience moderne
                    </h4>
                    <p>
                       SeeFlix est conçu pour fonctionner parfaitement sur ordinateur, tablette et mobile.
                    </p>
                </div>

                <div className="card">
                    {/* icon */}
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