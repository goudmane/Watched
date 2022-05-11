import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import { useFetchByMovieID } from "../../hooks/moviesHooks";
import MovieInfo from "../../components/MovieInfo";
import MovieDisplay from "../../components/MovieDisplay";
import Divider from "../../components/Divider";

const MovieDetail = () => {
    const { movieId } = useParams();
    const { movie, loading } = useFetchByMovieID(movieId);
    if (loading) return <div>Loading...</div>;
    return (
        <>
            <Banner page="detail" movie={movie} />
            <div className="container">
                <div className="movie-details">
                    <MovieInfo movie={movie} />
                    <Divider />
                    <MovieDisplay movie={movie} />
                    <Divider />
                </div>
            </div>
        </>
    );
};

export default MovieDetail;
