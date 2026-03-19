import { top_shows } from "./top_shows";
import { trending_movies } from "./trending_movies";


// folm tv shows
import black_adam from "../assets/show_covers/black_adam.jpg";
import casa_se_papel from "../assets/show_covers/casa_de_papel.jpg";
import jumanji from "../assets/show_covers/jumanji.jpg";
import peaky from "../assets/show_covers/peaky.jpg";
import rampage from "../assets/show_covers/rampage.jpg";
import stranger5 from "../assets/show_covers/stranger5.jpg";
import the_cent from "../assets/show_covers/the_cent.jpg";

// film movies yo

import expendables3 from "../assets/movie_covers/expendables3.jpg";
import extraction from "../assets/movie_covers/extraction.jpg";
import scream7 from "../assets/movie_covers/scream7.jpg";
import the_transformer5 from "../assets/movie_covers/the_transformer5.jpg";
import urban_warrior from "../assets/movie_covers/urban_warrior.jpg";




const new_films_tvshow = [
    {
        id: 10,
        title: "Back Adam",
        cover: black_adam,
        rating: 8.0,
        type: "tvshow",
    },
    {
        id: 11,
        title: "Casa de Papel",
        cover: casa_se_papel,
        rating: 3.5,
        type: "tvshow",
    },
    {
        id: 12,
        title: "Jumanji",
        cover: jumanji,
        rating: 8.6,
        type: "tvshow",
    },
    {
        id: 13,
        title: "Peaky",
        cover: peaky,
        rating: 8.0,
        type: "tvshow",
    },
    {
        id: 15,
        title: "Rampage",
        cover: rampage,
        rating: 4.3,
        type: "tvshow",
    },
    {
        id: 16,
        title: "Stranger5",
        cover: stranger5,
        rating: 5.6,
        type: "tvshow",
    },
    {
        id: 17,
        title: "The Cent",
        cover: the_cent,
        rating: 6.0,
        type: "tvshow",
    },
];



const new_films_trending =[
    {
        id: 100,
        title: "Expendables",
        cover: expendables3,
        rating: 6.0,
        type: "movie", 
    },
    {
        id: 101,
        title: "Extraction",
        cover: extraction,
        rating: 6.0,
        type: "movie", 
    },
    {
        id: 103,
        title: "Scream7",
        cover: scream7,
        rating: 6.0,
        type: "movie", 
    },
    {
        id: 104,
        title: "the_transformer 5",
        cover: the_transformer5,
        rating: 6.0,
        type: "movie", 
    },
    {
        id: 105,
        title: "Urban_Warrior",
        cover: urban_warrior,
        rating: 6.0,
        type: "movie", 
    },
];



export const medias = [
    
        ...top_shows,
        ...trending_movies,
        ...new_films_trending,
        ...new_films_tvshow,
       
    
];