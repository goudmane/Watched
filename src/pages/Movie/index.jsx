import React from "react";
import { useParams } from "react-router-dom";
import { FaGreaterThan, FaStar } from "react-icons/fa";
import Banner from "../../components/Banner";
import { useFetchByMovieID } from "../../hooks/moviesHooks";
import { movie } from "../../utils/links";
import MovieInfo from "../../components/MovieInfo";
import MovieDisplay from "../../components/MovieDisplay";

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
                    <MovieInfo movie={movie} />
                    <hr style={{ margin: "1rem 0" }} />
                    <MovieDisplay movie={movie} />
                </div>
            </div>
        </>
    );
};

export default MovieDetail;
