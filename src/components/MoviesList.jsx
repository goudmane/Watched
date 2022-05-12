import React from "react";
import { MovieCard } from ".";

const MoviesList = ({ movies }) => {
    return (
        <>
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
