import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Banner from "../../components/Banner";
import { useFetchByMovieID } from "../../hooks/moviesHooks";
import { movie } from "../../utils/links";

const MovieDetail = () => {
    const { movieId } = useParams();
    // const { movie, loading } = useFetchByMovieID(movieId);
    // console.log(movie);
    // if (loading) return <div>Loading...</div>;
    return (
        <>
            <Banner />
            <div className="container">
                <div className="movie-details">
                    <div className="movie-info">
                        <h2 className="movie-title">
                            {movie.title}
                            <span className="release-year">
                                ({new Date(movie.release_date).getFullYear()})
                            </span>
                        </h2>
                        <div className="movie-genres">
                            {movie.genres
                                .map((genre) => genre.name)
                                .join(" / ")}
                        </div>

                        <div className="movie-rating">
                            <FaStar className="rating-star" />
                            <span>{movie.vote_average} / 10</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetail;
