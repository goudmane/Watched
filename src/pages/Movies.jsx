import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;
const allMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
const imageURL = `https://image.tmdb.org/t/p/w1280/<IMAGE>.jpg`;

const Movies = () => {
    // All Movies State
    const [movies, setMovies] = useState([]);

    // Using Use Effect to fetch Data
    useEffect(() => {
        const getMovies = async () => {
            const response = await fetch(allMovies);
            const data = await response.json();
            if (+response.status === 200) setMovies(data.results);
            else console.log("Error Occurred");
        };
        getMovies();
    }, []);

    return (
        <div>
            {movies &&
                movies.map((movie) => <Movie key={movie.id} data={movie} />)}
        </div>
    );
};

export default Movies;
