import React from "react";
import { useParams } from "react-router-dom";
import { useFetchByMovieID } from "../../hooks/moviesHooks";
import Helmet from "react-helmet";
import {
    Banner,
    Divider,
    Loader,
    MovieInfo,
    MovieDisplay,
    MovieCast,
    MoviesList,
} from "../../components";

const MovieDetail = () => {
    const { movieId } = useParams();
    const { movie, loading, error } = useFetchByMovieID(movieId);
    if (loading) return <Loader />;
    if (error) return <h2>{error}</h2>;
    return (
        <>
            <Helmet>
                <title>
                    {movie.title} (
                    {String(new Date(movie.release_date).getFullYear())})
                </title>
            </Helmet>
            <Banner page="detail" movie={movie} />
            <div className="container">
                <div className="movie-details">
                    <MovieInfo movie={movie} />
                    <Divider />
                    <MovieDisplay movie={movie} />
                    <Divider />
                    <MovieCast cast={movie.cast.slice(0, 10)} />
                    <Divider />
                    {movie.recommended && (
                        <>
                            <h2 className="title-label">Recommended Movies:</h2>
                            <MoviesList
                                movies={movie.recommended}
                                orientation="horizontal"
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default MovieDetail;
