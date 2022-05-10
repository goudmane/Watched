import { useState, useEffect } from "react";
import {
    getCreditsByMovieId,
    getMovieById,
    getMoviesByEndPoint,
    getRecommendationsByMovieId,
    getVideoSourceByMovieId,
} from "../API/moviesService";
import { endPoints } from "../utils/endpoints";
import {
    getDirectorFromCrew,
    getWritersFromCrew,
    rectifyImageLinks,
    rectifyMovieData,
} from "../utils/helperFunctions";

export const useFetchByMoviesAtHome = (pageNum = 1) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const { results: trendingMovies } = await getMoviesByEndPoint(
                    endPoints.trendingMoviesByWeek,
                    pageNum
                );
                const { results: upcomingMovies } = await getMoviesByEndPoint(
                    endPoints.upcomingMovies,
                    pageNum
                );
                const { results: topRatedMovies } = await getMoviesByEndPoint(
                    endPoints.topRatedMovies,
                    pageNum
                );
                const bannerMovie =
                    trendingMovies[
                        Math.floor(Math.random() * trendingMovies.length)
                    ];
                setMovies(() => ({
                    bannerMovie: rectifyMovieData(bannerMovie),
                    trendingMovies: rectifyMovieData(trendingMovies),
                    upcomingMovies: rectifyMovieData(upcomingMovies),
                    topRatedMovies: rectifyMovieData(topRatedMovies),
                }));
            } catch (error) {
                console.log(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [pageNum]);
    return { movies, loading, error };
};

export const useFetchByMovieID = (movieId) => {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const movieData = await getMovieById(movieId);
            const { crew, cast } = await getCreditsByMovieId(movieId);
            const recommendedData = await getRecommendationsByMovieId(movieId);
            const youtubeLink = await getVideoSourceByMovieId(movieId);
            setMovie(() => ({
                ...movieData,
                poster_path: rectifyImageLinks(movieData.poster_path, "w300"),
                backdrop_path: rectifyImageLinks(
                    movieData.backdrop_path,
                    "original"
                ),
                youtube_link: youtubeLink,
                cast: cast.slice(0, 10).map((c) => ({
                    ...c,
                    profile_path: rectifyImageLinks(c.profile_path, "original"),
                })),
                director: getDirectorFromCrew(crew),
                writers: getWritersFromCrew(crew),
                recommended: recommendedData,
            }));

            setLoading(false);
        })();
    }, [movieId]);
    return { movie, loading };
};
