import React from "react";
import Helmet from "react-helmet";

const TopRated = () => {
    return (
        <>
            <Helmet>
                <title>Movify - Top rated movies</title>
            </Helmet>
            <section>
                <div className="container">Top Rated Movies</div>
            </section>
        </>
    );
};

export default TopRated;
