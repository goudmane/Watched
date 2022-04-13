import { useState, useEffect } from "react";
import {
    getCreditsByMovieId,
    getMovieById,
    getMoviesByEndPoint,
    getRecommendationsByMovieId,
    getVideoSourceByMovieId,
} from "../API/moviesService";
import {
    getDirectorFromCrew,
    getWritersFromCrew,
    rectifyImageLinks,
} from "../utils/helperFunctions";

export const useFetchByMoviesEndpoint = (endPoint, pageNum) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const { results } = await getMoviesByEndPoint(endPoint, pageNum);
            setMovies(results);
            setLoading(false);
        })();
    }, [endPoint, pageNum]);
    return { movies, loading };
};

export const useFetchByMovieID = (movieId) => {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
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
                cast: cast
                    .slice(0, 10)
                    .map((c) => ({
                        ...c,
                        profile_path: rectifyImageLinks(
                            c.profile_path,
                            "original"
                        ),
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
