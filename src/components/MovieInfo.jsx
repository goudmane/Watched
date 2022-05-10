import React from "react";
import { FaGreaterThan, FaStar } from "react-icons/fa";

const MovieInfo = ({ movie }) => {
    return (
        <div className="movie-info">
            <h2 className="movie-title">
                {movie.title}
                <span className="release-year">
                    ({new Date(movie.release_date).getFullYear()})
                </span>
            </h2>
            {movie.genres && (
                <div className="movie-genres">
                    {movie.genres.map((genre) => genre.name).join(" / ")}
                </div>
            )}
            <div className="movie-stats">
                <div className="movie-rating">
                    <FaStar className="rating-star" />
                    <span>{movie.vote_average} / 10</span>
                </div>
                <div className="movie-numbers">
                    <div className="movie-runtime">
                        <div className="runtime-label">Running Time</div>
                        <div className="runtime-value">
                            {movie.runtime} mins
                        </div>
                    </div>
                    <FaGreaterThan />
                    <div className="release-date">
                        <div className="release-label">Release Date</div>
                        <div className="release-value">
                            {movie.release_date}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;
