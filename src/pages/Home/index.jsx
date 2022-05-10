import React from "react";
import Banner from "../../components/Banner";
import MoviesList from "../../components/MoviesList";
import { useFetchByMoviesAtHome } from "../../hooks/moviesHooks";

const Home = () => {
    const { movies, loading, error } = useFetchByMoviesAtHome();
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;
    return (
        <>
            <Banner page="home" movie={movies.bannerMovie} />
            <div className="container">
                <MoviesList
                    movies={movies.trendingMovies}
                    label="Trending Movies"
                />
                <MoviesList
                    movies={movies.upcomingMovies}
                    label="Upcoming Movies"
                />
                <MoviesList
                    movies={movies.topRatedMovies}
                    label="Top Rated Movies"
                />
            </div>
        </>
    );
};

export default Home;
