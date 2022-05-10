import React from "react";
import { FaStar } from "react-icons/fa";

const Banner = ({ page, movie }) => {
    return (
        <div
            className="banner"
            style={{
                backgroundImage: `url(${movie.backdrop_path})`,
            }}>
            {page === "home" && (
                <div className="movie-container">
                    <div className="movie-rating">
                        <FaStar className="rating-star" />{" "}
                        <span>{movie.vote_average} / 10</span>
                    </div>
                    <div className="movie-title">{movie.original_title}</div>
                    <div className="movie-description">{movie.overview}</div>
                </div>
            )}
            <div className="overlay"></div>
        </div>
    );
};

export default Banner;
