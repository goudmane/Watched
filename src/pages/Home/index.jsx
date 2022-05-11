import React from "react";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import Loader from "../../components/Loader";
import { useFetchByMoviesAtHome } from "../../hooks/moviesHooks";

const Home = () => {
    const { movies, loading, error } = useFetchByMoviesAtHome();
    if (loading) return <Loader />;
    if (error) return <h2>{error}</h2>;
    return (
        <>
            <Banner page="home" movie={movies.bannerMovie} />
            <div className="container">
                <Category
                    movies={movies.trendingMovies}
                    label="Trending Movies"
                    to="/trending"
                />
                <Category
                    movies={movies.upcomingMovies}
                    label="Upcoming Movies"
                    to="/upcoming"
                />
                <Category
                    movies={movies.topRatedMovies}
                    label="Top Rated Movies"
                    to="/top-rated"
                />
            </div>
        </>
    );
};

export default Home;
