import React from "react";
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
                <div className="movie-title">{movie.original_title}</div>
                <div className="bookmark">
                    <FaRegBookmark />
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
