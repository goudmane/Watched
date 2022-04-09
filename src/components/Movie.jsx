import React, { useState } from "react";

const Movie = ({ movie }) => {
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        setLiked((prev) => !prev);
    };
    return <div className="movie">Movie Name</div>;
};

export default Movie;
