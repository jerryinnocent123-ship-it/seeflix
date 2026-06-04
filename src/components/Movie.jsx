import { Cat } from "lucide-react";
import MediaCards from "./MediaCards";
import TrailerModal from "./TrailerModal";
import "./styles/mediaList.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getTrailerKey } from "../utils/trailerUtils";


function Movie({ searchText = "" }) {
  const { t } = useTranslation();
  const url = "https://api.themoviedb.org/3/discover/movie?api_key="
  const apiKey = import.meta.env.VITE_API_KEY;

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState({ videoKey: null, title: "" });

  const fetchMovies = async () => {
    fetch(`${url}${apiKey}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Filter movies based on search text
  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchText, movies]);

  // Handle movie click to fetch and show trailer
  const handleMovieClick = async (movieId, movieTitle) => {
    try {
      const videosUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;
      const response = await fetch(videosUrl);
      const data = await response.json();

      const trailerKey = getTrailerKey(data.results);

      if (trailerKey) {
        setSelectedTrailer({ videoKey: trailerKey, title: movieTitle });
        setTrailerOpen(true);
      } else {
        console.warn(`No trailer found for ${movieTitle}`);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <h1 style={{ color: "white", margin: "20px" }}>{t("topMovies")}</h1>
      </div>

      <div className="list-media">
        {filteredMovies.length > 0 ? (

          
          filteredMovies.map((movie) => (
            <MediaCards
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              onTrailerClick={() => handleMovieClick(movie.id, movie.title)}
            />
          ))
        ) : (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", color: "white", padding: "40px" }}>
            <p>{t("noMoviesFound", { searchText })}</p>
          </div>
        )}
      </div>

      <TrailerModal
        isOpen={trailerOpen}
        videoKey={selectedTrailer.videoKey}
        title={selectedTrailer.title}
        onClose={() => setTrailerOpen(false)}
      />
    </>
  );
}
export default Movie;

