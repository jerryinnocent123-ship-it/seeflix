import "./styles/mediacards.css";

function MediaCards({ title, cover, rating, type }) {
  return (
    <div className="media-card">
      <div className="media-item">
        {/* Imaj la */}
        <img src={cover} alt={title} className="image-card" />
        
        {/* Info ki parèt sou imaj la lè ou hover (Netflix style) */}
        <div className="card-info">
          <span className={type}>
            {type === "movie" ? "movie" : "tvshow"}
          </span>
          <span className="rating-card">
            ★ {rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MediaCards;