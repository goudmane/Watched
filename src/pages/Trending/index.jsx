import React from "react";
import Helmet from "react-helmet";
import { Error, Loader, MoviesList } from "../../components";
import { useFecthAtCategoryPage } from "../../hooks/moviesHooks";
import { endPoints } from "../../utils/endpoints";

const TrendingMovies = () => {
    const { movies, loading, error } = useFecthAtCategoryPage(
        endPoints.trendingMovies
    );
    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    return (
        <>
            <Helmet>
                <title>Movify - Trending Movies</title>
            </Helmet>
            <section>
                <div className="container">
                    <h1 className="title-label">Trending Movies</h1>
                    <div>
                        <MoviesList movies={movies} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrendingMovies;
