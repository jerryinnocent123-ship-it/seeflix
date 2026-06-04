import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import TvCards from "./TvCards";
import TrailerModal from "./TrailerModal";
import "./styles/tvList.css";
import { getTrailerKey } from "../utils/trailerUtils";


function TvShow({ searchText = "" }) {
    const { t } = useTranslation();
    const url = "https://api.themoviedb.org/3/discover/tv?api_key="
    const apiKey = import.meta.env.VITE_API_KEY;

    const [tvShows, setTvShows] = useState([]);
    const [filteredShows, setFilteredShows] = useState([]);
    const [trailerOpen, setTrailerOpen] = useState(false);
    const [selectedTrailer, setSelectedTrailer] = useState({ videoKey: null, title: "" });

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

    // Handle TV show click to fetch and show trailer
    const handleShowClick = async (showId, showName) => {
        try {
            const videosUrl = `https://api.themoviedb.org/3/tv/${showId}/videos?api_key=${apiKey}`;
            const response = await fetch(videosUrl);
            const data = await response.json();

            const trailerKey = getTrailerKey(data.results);

            if (trailerKey) {
                setSelectedTrailer({ videoKey: trailerKey, title: showName });
                setTrailerOpen(true);
            } else {
                console.warn(`No trailer found for ${showName}`);
            }
        } catch (error) {
            console.error("Error fetching trailer:", error);
        }
    };

    return (
        <>
            <div>
                <h1 style={{ color: "white", margin: "20px" }}>{t("topTvShows")}</h1>
            </div>
            <div className="list-media">
                {filteredShows.length > 0 ? (
                    filteredShows.map((show) => (
                        <TvCards
                            key={show.id}
                            name={show.name}
                            poster_path={show.poster_path}
                            vote_average={show.vote_average}
                            onTrailerClick={() => handleShowClick(show.id, show.name)}
                        />
                    ))
                ) : (
                    <div style={{ gridColumn: "1 / -1", textAlign: "center", color: "white", padding: "40px" }}>
                        <p>{t("noTvShowsFound", { searchText })}</p>
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
    )
}

export default TvShow