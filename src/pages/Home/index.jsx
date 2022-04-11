import React from "react";
import MovieCard from "../../components/MovieCard";
import { useFetchByMoviesEndpoint } from "../../hooks/moviesHooks";

const Home = () => {
    const { movies: trendingMovies, loading } = useFetchByMoviesEndpoint(
        "/trending/movie/week"
    );
    const { movies: upcomingMovies } =
        useFetchByMoviesEndpoint("/movie/upcoming");
    const { movies: topRatedMovies } =
        useFetchByMoviesEndpoint("/movie/top_rated");

    console.log(loading);
    console.log("[TRENDING MOVIES]", trendingMovies);
    console.log("[UPCOMING MOVIES]", upcomingMovies);
    console.log("[TOPRATED MOVIES]", topRatedMovies);

    return (
        <div className="movie-grid">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    );
};

export default Home;
