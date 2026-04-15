import { useState } from "react";
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import CategoryBar from "../components/CategoryBar"
import Movie from "../components/Movie"
import TvShow from "../components/TvShow"


export default function Media(){
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleSearchChange = (text) => {
        setSearchText(text);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return(
        <>
        <NavBar/>
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
        <Footer/>
            </>
    )
}