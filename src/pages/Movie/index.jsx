import React from "react";
import { useParams } from "react-router-dom";
import { FaGreaterThan, FaStar } from "react-icons/fa";
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
                        <div className="movie-stats">
                            <div className="movie-rating">
                                <FaStar className="rating-star" />
                                <span>{movie.vote_average} / 10</span>
                            </div>
                            <div className="movie-numbers">
                                <div className="movie-runtime">
                                    <div className="runtime-label">
                                        Running Time
                                    </div>
                                    <div className="runtime-value">
                                        {movie.runtime} mins
                                    </div>
                                </div>
                                <FaGreaterThan />
                                <div className="release-date">
                                    <div className="release-label">
                                        Release Date
                                    </div>
                                    <div className="release-value">
                                        {movie.release_date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{ margin: "1rem 0" }} />
                    <div className="movie-display">
                        <div className="movie-poster">
                            <div className="poster">
                                <img
                                    src={movie.poster_path}
                                    alt={movie.title}
                                />
                            </div>
                            <div className="info">
                                <div className="box">
                                    <div className="label">Director</div>
                                    <div className="content">
                                        {movie.director
                                            .map((c) => c.name)
                                            .join(", ")}
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="label">Writers</div>
                                    <div className="content">
                                        {movie.writers
                                            .map((c) => c.name)
                                            .join(", ")}
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="label">Cast</div>
                                    <div className="content">
                                        {movie.cast
                                            .slice(0, 4)
                                            .map((c) => c.name)
                                            .join(", ")}
                                    </div>
                                </div>
                                <hr />
                                <div className="box">
                                    <div className="label">Plot</div>
                                    <div className="content">
                                        {movie.overview}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="movie-trailer">
                            <iframe
                                width="100%"
                                height="100%"
                                src={movie.youtube_link}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetail;
