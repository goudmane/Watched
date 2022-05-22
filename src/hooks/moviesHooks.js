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
                const [
                    { results: trendingMovies },
                    { results: upcomingMovies },
                    { results: topRatedMovies },
                ] = await Promise.all([
                    getMoviesByEndPoint(endPoints.trendingMovies, pageNum),
                    getMoviesByEndPoint(endPoints.upcomingMovies, pageNum),
                    getMoviesByEndPoint(endPoints.topRatedMovies, pageNum),
                ]);
                const bannerMovie =
                    trendingMovies[
                        Math.floor(Math.random() * trendingMovies.length)
                    ];
                setMovies(() => ({
                    bannerMovie: rectifyMovieData(bannerMovie),
                    trendingMovies: rectifyMovieData(
                        trendingMovies.slice(0, 10)
                    ),
                    upcomingMovies: rectifyMovieData(
                        upcomingMovies.slice(0, 10)
                    ),
                    topRatedMovies: rectifyMovieData(
                        topRatedMovies.slice(0, 10)
                    ),
                }));
            } catch (error) {
                console.log(error.response || error.message);
                setError(
                    error.response || { status: 500, message: error.message }
                );
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
    const [error, setError] = useState("");
    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const [
                    movieData,
                    { crew, cast },
                    recommendedData,
                    youtubeLink,
                ] = await Promise.all([
                    getMovieById(movieId),
                    getCreditsByMovieId(movieId),
                    getRecommendationsByMovieId(movieId),
                    getVideoSourceByMovieId(movieId),
                ]);

                setMovie(() => ({
                    ...movieData,
                    poster_path: rectifyImageLinks(
                        movieData.poster_path,
                        "w300"
                    ),
                    backdrop_path: rectifyImageLinks(
                        movieData.backdrop_path,
                        "original"
                    ),
                    youtube_link: youtubeLink,
                    cast: cast.map((c) => ({
                        ...c,
                        profile_path: rectifyImageLinks(
                            c.profile_path,
                            "original"
                        ),
                    })),
                    director: getDirectorFromCrew(crew),
                    writers: getWritersFromCrew(crew),
                    recommended: rectifyMovieData(recommendedData),
                }));
            } catch (error) {
                console.log(error.response || error.message);
                setError(
                    error.response || { status: 500, message: error.message }
                );
            } finally {
                setLoading(false);
            }
        })();
    }, [movieId]);
    return { movie, loading, error };
};

export const useFecthAtCategoryPage = (endPoint, pageNum = 1) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const { results } = await getMoviesByEndPoint(
                    endPoint,
                    pageNum
                );
                setMovies(rectifyMovieData(results));
            } catch (error) {
                console.log(error.response || error.message);
                setError(
                    error.response || { status: 500, message: error.message }
                );
            } finally {
                setLoading(false);
            }
        })();
    }, [endPoint, pageNum]);
    return { movies, loading, error };
};
