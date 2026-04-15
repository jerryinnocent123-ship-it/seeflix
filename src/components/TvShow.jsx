import { useEffect, useState } from "react";
import TvCards from "./TvCards";
import "./styles/tvList.css";



function TvShow({ searchText = "" }) {
    const url = "https://api.themoviedb.org/3/discover/tv?api_key="
    const apiKey = import.meta.env.VITE_API_KEY;

    const [tvShows, setTvShows] = useState([]);
    const [filteredShows, setFilteredShows] = useState([]);

    const fetchTvShows = async () => {
    fetch(`${url}${apiKey}`)
      .then((res) => res.json())
      .then((data) => setTvShows(data.results))
      .catch((error) => console.error("Error fetching TV shows:", error));
  };
        useEffect(() => {
            fetchTvShows();
          }, []);

    // Filter TV shows based on search text
    useEffect(() => {
        if (searchText.trim() === "") {
            setFilteredShows(tvShows);
        } else {
            const filtered = tvShows.filter((show) =>
                show.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredShows(filtered);
        }
    }, [searchText, tvShows]);

    return (
        <>
            <div>
                <h1 style={{ color: "white", margin: "20px" }}>
                    Top TV Shows</h1>
            </div>
            <div className="list-media">
                {filteredShows.length > 0 ? (
                    filteredShows.map((show) => (
                        <TvCards
                            key={show.id}
                            name={show.name}
                            poster_path={show.poster_path}
                            vote_average={show.vote_average}
                        />
                    ))
                ) : (
                    <div style={{ gridColumn: "1 / -1", textAlign: "center", color: "white", padding: "40px" }}>
                        <p>No TV shows found matching "{searchText}"</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default TvShow