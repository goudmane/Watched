import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies, label }) => {
    return (
        <>
            <h2>{label}</h2>
            <div className="movie-grid">
                {movies &&
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </>
    );
};

export default MoviesList;
