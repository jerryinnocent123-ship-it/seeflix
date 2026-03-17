import "./aboutMission.css"


export default function AboutMission(){
    return(
        <>
        <div className="missiom-container">
            <div className="mission-content">
                <h1 className="title-mission">Our Mission</h1>
                <p className="para-mission">
                    La mission de SeeFlix est de rendre le divertissement numérique accessible, simple et agréable pour tous.
                    Nous voulons:
                    <ul>
                        <li>Offrir un accès facile à une grande variété de films et séries </li>
                        <li>Créer une plateforme rapide et moderne</li>
                        <li>Permettre aux utilisateurs de découvrir de nouveaux contenus</li>
                        <li>Améliorer continuellement l’expérience de visionnage</li>
                     
                    </ul>
                </p>
                <p>
                    Notre objectif est de construire une plateforme où les utilisateurs peuvent explorer, découvrir et apprécier le meilleur du cinéma et des séries.
                </p>
            </div>
            <div className="missio-img">
                <img src="seeflix.png" alt="logo seeflix" />
            </div>
        
        </div>
        

        </>
    )
}