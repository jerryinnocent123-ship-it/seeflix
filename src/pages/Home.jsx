import { useState } from "react";
import Header from "../components/Header";
import CategoryBar from "../components/CategoryBar";
import Movie from "../components/Movie";
import Footer from "../components/Footer";
import TvShow from "../components/TvShow";

function Home(){
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleSearchChange = (text) => {
        setSearchText(text);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
        <Header />
        <CategoryBar
            onSearchChange={handleSearchChange}
            onCategoryChange={handleCategoryChange}
        />
        {(selectedCategory === "All" || selectedCategory === "Movies") && (
            <Movie searchText={searchText} />
        )}
        {(selectedCategory === "All" || selectedCategory === "TV Shows") && (
            <TvShow searchText={searchText} />
        )}
        <Footer />
        </>
    )
}

export default Home;