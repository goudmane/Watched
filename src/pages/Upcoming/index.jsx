import React from "react";
import Helmet from "react-helmet";

const UpcomingMovies = () => {
    return (
        <>
            <Helmet>
                <title>Movify - Upcoming Movies</title>
            </Helmet>
            <section>
                <div className="container">Upcoming Movies</div>
            </section>
        </>
    );
};

export default UpcomingMovies;
