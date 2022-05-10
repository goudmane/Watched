import React from "react";
import { FaStar } from "react-icons/fa";
import { baseImgUrl } from "../API/moviesService";

// const movie = {
//     adult: false,
//     backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
//     genre_ids: [80, 53, 18],
//     id: 475557,
//     original_language: "en",
//     original_title: "Joker",
//     overview:
//         "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
//     popularity: 174.494,
//     poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//     release_date: "2019-10-02",
//     title: "Joker",
//     video: false,
//     vote_average: 8.2,
//     vote_count: 20291,
// };

const Banner = ({ page, movie }) => {
    return (
        <div
            className="banner"
            style={{
                backgroundImage: `url(${baseImgUrl}/original/${movie.backdrop_path})`,
            }}>
            {page === "home" && (
                <div className="movie-container">
                    <div className="movie-rating">
                        <FaStar className="rating-star" />{" "}
                        <span>{movie.vote_average} / 10</span>
                    </div>
                    <div className="movie-title">{movie.original_title}</div>
                    <div className="movie-description">{movie.overview}</div>
                </div>
            )}
            <div className="overlay"></div>
        </div>
    );
};

export default Banner;
