import React from "react";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.id}`}>
                <img src={movie.poster_path} alt={movie.original_title} />
            </Link>
            <div className="movie-detail">
                <div className="movie-title">
                    <Link to={`movie/${movie.id}`}>{movie.original_title}</Link>
                </div>
                <div className="bookmark">
                    <FaRegBookmark />
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
