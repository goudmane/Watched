import React from "react";
import Banner from "../../components/Banner";
import MovieCard from "../../components/MovieCard";
import { useFetchByMoviesEndpoint } from "../../hooks/moviesHooks";
import { endPoints } from "../../utils/endpoints";

const Home = () => {
    const { movies: trendingMovies, loading } = useFetchByMoviesEndpoint(
        endPoints.trendingMoviesByWeek
    );
    // const { movies: upcomingMovies } = useFetchByMoviesEndpoint(
    //     endPoints.upcomingMovies
    // );
    // const { movies: topRatedMovies } = useFetchByMoviesEndpoint(
    //     endPoints.topRatedMovies
    // );

    // console.log(loading);
    // console.log("[TRENDING MOVIES]", trendingMovies);
    // console.log("[UPCOMING MOVIES]", upcomingMovies);
    // console.log("[TOPRATED MOVIES]", topRatedMovies);

    return (
        <>
            <Banner />
            <div className="container">
                <div className="movie-grid">
                    {trendingMovies &&
                        trendingMovies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                </div>
            </div>
        </>
    );
};

export default Home;
