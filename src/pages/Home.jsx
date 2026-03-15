import Header from "../components/Header";
import MediaList from "../components/MediaList";
import { trending_movies } from "../data/trending_Movies";
import { top_shows } from "../data/top_Shows";
import Footer from "../components/Footer";

function Home(){
    return (
        <>
        <Header />
        <MediaList title="Trending Movies" items={trending_movies} />
        <MediaList title="Top TV Shows" items={top_shows} />
        <Footer />
        </>
    )
}

export default Home;