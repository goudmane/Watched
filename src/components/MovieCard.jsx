import React, { useState } from "react";
import { baseImgUrl } from "../API/moviesService";

const movie = {
    adult: false,
    backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    genre_ids: [80, 53, 18],
    id: 475557,
    original_language: "en",
    original_title: "Joker",
    overview:
        "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    popularity: 174.494,
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    release_date: "2019-10-02",
    title: "Joker",
    video: false,
    vote_average: 8.2,
    vote_count: 20291,
};

const MovieCard = ({ data }) => {
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        setLiked((prev) => !prev);
    };
    return (
        <div className="movie-card">
            <div className="overlay"></div>
            <img
                src={`${baseImgUrl}${movie.poster_path}`}
                alt={movie.original_title}
            />
        </div>
    );
};

export default MovieCard;
