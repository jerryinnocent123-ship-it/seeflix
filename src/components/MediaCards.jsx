import "./styles/mediacards.css";
import { formatRating } from "../utils/formatters";

function MediaCards({ title, poster_path, vote_average, onTrailerClick }) {

  return (
    <div className="media-card" onClick={onTrailerClick}>
      <div className="media-item">
        {/* Imaj la */}
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="image-card" />

        {/* Info ki parèt sou imaj la lè ou hover */}
        <div className="card-info">
            <h3 className="title-card">{title}</h3>
          <span className="rating-card">
            ★ {formatRating(vote_average)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MediaCards;