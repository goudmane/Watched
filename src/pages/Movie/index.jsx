import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import { useFetchByMovieID } from "../../hooks/moviesHooks";
// import { movie } from "../../utils/links";
import MovieInfo from "../../components/MovieInfo";
import MovieDisplay from "../../components/MovieDisplay";

const MovieDetail = () => {
    const { movieId } = useParams();
    const { movie, loading } = useFetchByMovieID(movieId);
    if (loading) return <div>Loading...</div>;
    return (
        <>
            <Banner page="detail" />
            <div className="container">
                <div className="movie-details">
                    <MovieInfo movie={movie} />
                    <hr style={{ margin: "1rem 0" }} />
                    <MovieDisplay movie={movie} />
                </div>
            </div>
        </>
    );
};

export default MovieDetail;
