import "./mediacards.css"

function MediaCards({title, cover, rating,type}) {
    return (
        <div className="media-card">
            {/* Card la */}
            <div className="media-item">
                
                {/* imaj */}
            <img src={cover} alt={title} className="image-card" />


            {/* titr nn crd la */}
            <h3 className="title-card">{title}</h3>
                <p className="type">
                    Type: {type}
                </p>


            {/* Etoile | rating yo */}
            {/* m just mete etoile */}
            <p className="rating-card">⭐⭐⭐⭐ <br /> {rating}</p>
            </div>
        </div>
    )
}


export default MediaCards;