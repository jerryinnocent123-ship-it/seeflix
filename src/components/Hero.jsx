import "./hero.css"



function Hero(){
    return(
        <>
        <div className="hero-container">'
        <div className="hero-contents">
            {/* titre nan hero a */}
            <h1 className="hero-title">
              Welcome to Seeflix
              </h1>

                {/* sous titr la */}
             <p className="sub-title">
             treaming is no Longer a luxury, it’s Lifestyle
             </p>

            {/* bouton nan hero a */}
            <button className="btn-hero">Get Started</button>

        </div>      
        </div>
        
        
        </>
    )
}


export default Hero;