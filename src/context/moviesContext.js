import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
    watchList: localStorage.getItem("watchList")
        ? JSON.parse(localStorage.getItem("watchList"))
        : [],
    watched: localStorage.getItem("watched")
        ? JSON.parse(localStorage.getItem("watched"))
        : [],
};

const moviesContext = createContext(initialState);

const MoviesProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(state.watchList));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);
    const addMovieToWatchList = (movie) => {
        setState((prev) => ({
            ...prev,
            watchList: [movie, ...prev.watchList],
        }));
    };
    const addMovieToWatched = (movie) => {
        setState((prev) => ({
            ...prev,
            watchList: prev.watchList.filter((mov) => mov.id !== movie.id),
            watched: [movie, ...prev.watched],
        }));
    };
    const removeFromWatchList = (movieId) => {
        setState((prev) => ({
            ...prev,
            watchList: prev.watchList.filter((movie) => movie.id !== movieId),
        }));
    };
    const removeFromWatched = (movieId) => {
        setState((prev) => ({
            ...prev,
            watched: prev.watched.filter((movie) => movie.id !== movieId),
        }));
    };
    const moveToWatchList = (movie) => {
        setState((prev) => ({
            ...prev,
            watchList: [movie, ...prev.watchList],
            watched: prev.watched.filter((mov) => mov.id !== movie.id),
        }));
    };
    return (
        <moviesContext.Provider
            value={{
                watchList: state.watchList,
                watched: state.watched,
                addMovieToWatchList,
                addMovieToWatched,
                moveToWatchList,
                removeFromWatchList,
                removeFromWatched,
            }}>
            {children}
        </moviesContext.Provider>
    );
};

export default MoviesProvider;
export const useMovies = () => useContext(moviesContext);
