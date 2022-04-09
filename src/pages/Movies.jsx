import React, { useState } from "react";
import MoviesList from "../components/MoviesList";
import Search from "../components/Search";
import { moviesData } from "../data/moviesData";

const API_KEY = process.env.REACT_APP_API_KEY;
const allMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
const imageURL = `https://image.tmdb.org/t/p/w500/<IMAGE>.jpg`;

const Movies = () => {
    console.log(API_KEY);
    // Movie URL
    // const URL = `http://www.omdbapi.com/?i=tt3896198&apikey=dd58f28f`
    // TMDB API KEY: 7c8b7c239ae206c18b3751c383752595
    // URL: https://api.themoviedb.org/3/movie/550?api_key=7c8b7c239ae206c18b3751c383752595
    const [movies, setMovies] = useState(moviesData);
    const [filteredMovies, setFilteredMovies] = useState(movies);
    return (
        <div>
            <Search setMovies={setFilteredMovies} movies={movies} />
            <MoviesList movies={filteredMovies} />
        </div>
    );
};

export default Movies;
