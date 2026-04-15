import "./styles/mediacards.css";

function TvCards({ name, poster_path, vote_average}) {

  return (
    <div className="media-card">
      <div className="media-item">
        {/* Imaj la */}
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={name} className="image-card" />

        {/* Info ki parèt sou imaj la lè ou hover */}
        <div className="card-info">
            <h3 className="title-card">{name}</h3>
          <span className="rating-card">
            ★ {vote_average}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TvCards;