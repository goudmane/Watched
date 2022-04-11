import { useState, useEffect } from "react";
import { getMoviesByEndPoint } from "../API/moviesService";

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

const useFetchByMovieID = () => {};
