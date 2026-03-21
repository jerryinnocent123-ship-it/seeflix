import "./heroAbout.css"
import { Link } from "react-router-dom"


export default function HeroAbout(){
    return(
       <>
       <div className="hero-cont">
        <div className="desc"> 
             <h1 className="title-about">
                    About Us
             </h1>
            <p className="desc-about">
                SeeFlix est une plateforme de streaming moderne conçue pour offrir 
                aux utilisateurs une expérience simple, rapide et agréable pour découvrir
                 des films et des séries du monde entier. Notre objectif est de permettre à chacun
                  d’accéder facilement à un large catalogue de contenus de divertissement, directement 
                  depuis un navigateur web.
                Grâce à une interface intuitive et une organisation claire des contenus, SeeFlix permet 
                aux utilisateurs de parcourir, découvrir et profiter de leurs films et séries préférés
                 sans difficulté.
            </p>

            <Link to={"/contact"} className="btn-hero-about">Contact US</Link>
           
                
                
      </div>

      <div className="image-about">
        <img src="img-about-hero.png" alt="treaming with hero" />
      </div>
               

       </div>
       
       
       </>
    )
}
