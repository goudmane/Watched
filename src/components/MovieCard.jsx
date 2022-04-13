import React from "react";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import { baseImgUrl } from "../API/moviesService";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img
                src={`${baseImgUrl}/w500/${movie.poster_path}`}
                alt={movie.original_title}
            />
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
