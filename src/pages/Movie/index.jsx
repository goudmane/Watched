import React from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const { movieId } = useParams();
    return <div>MovieDetail : {movieId}</div>;
};

export default MovieDetail;