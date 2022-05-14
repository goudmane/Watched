import React from "react";
import { MovieCard } from ".";

const MoviesList = ({ movies, orientation = "vertical" }) => {
    const className =
        orientation === "horizontal" ? "movie-slider" : "movie-grid";
    return (
        <>
            <div className={className}>
                {movies &&
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </>
    );
};

export default MoviesList;
