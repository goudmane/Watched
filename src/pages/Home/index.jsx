import React from "react";
import Helmet from "react-helmet";
import { Loader, Banner, Category, Error } from "../../components";
import { useFetchByMoviesAtHome } from "../../hooks/moviesHooks";

const Home = () => {
    const { movies, loading, error } = useFetchByMoviesAtHome();
    if (loading) return <Loader />;
    if (error) return <Error error={error} />;
    return (
        <>
            <Helmet>
                <title>Movify - Surf through movies</title>
            </Helmet>
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
