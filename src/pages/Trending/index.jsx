import React from "react";
import Helmet from "react-helmet";

const TrendingMovies = () => {
    return (
        <>
            <Helmet>
                <title>Movify - Trending Movies</title>
            </Helmet>
            <section>
                <div className="container">Trending Movies</div>
            </section>
        </>
    );
};

export default TrendingMovies;
