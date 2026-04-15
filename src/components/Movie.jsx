import { Cat } from "lucide-react";
import MediaCards from "./MediaCards";
import "./styles/mediaList.css";
import { useState, useEffect } from "react";



function Movie({ searchText = "" }) {
  const url = "https://api.themoviedb.org/3/discover/movie?api_key="
  const apiKey = import.meta.env.VITE_API_KEY;

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

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









  return (

    <>
      <div style={{display:"flex", }}>
        <h1 style={{ color: "white", margin: "20px" }}>
          Top Movies</h1>
        
      </div>

      <div className="list-media">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MediaCards
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
            />
          ))
        ) : (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", color: "white", padding: "40px" }}>
            <p>No movies found matching "{searchText}"</p>
          </div>
        )}
      </div></>
  );
}
export default Movie;

