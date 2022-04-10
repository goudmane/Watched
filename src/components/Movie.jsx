import React, { useState } from "react";

const Movie = ({ data: movie }) => {
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        setLiked((prev) => !prev);
    };
    return <div className="movie">{JSON.stringify(movie)}</div>;
};

export default Movie;
