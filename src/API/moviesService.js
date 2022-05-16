import axios from "axios";
import { createLinkFromData } from "../utils/helperFunctions";

// const API_KEY = process.env.REACT_APP_API_KEY;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const baseUrl = `https://api.themoviedb.org/3`;

const API = axios.create({
    baseURL: baseUrl,
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
});
export const getAllMovies = async () => {
    const response = await API.get(`/discover/movie`);
    const data = await response.data;
    return data;
};

export const getMoviesByEndPoint = async (endPoint, pageNum = 1) => {
    const response = await API.get(endPoint, {
        params: {
            page: pageNum,
        },
    });
    const data = await response.data;
    return data;
};

export const getMovieById = async (movieId) => {
    const response = await API.get(`movie/${movieId}`);
    const data = await response.data;
    return data;
};

export const getCreditsByMovieId = async (movieId) => {
    const response = await API.get(`movie/${movieId}/credits`);
    const { crew, cast } = await response.data;
    return { crew, cast };
};

export const getRecommendationsByMovieId = async (movieId) => {
    const response = await API.get(`movie/${movieId}/recommendations`);
    const data = await response.data;
    return data ? data.results.slice(0, 8) : [];
};
export const getVideoSourceByMovieId = async (movieId) => {
    const response = await API.get(`movie/${movieId}/videos`);
    const data = await response.data;
    const link =
        data.results.length !== 0 ? createLinkFromData(data.results) : "";
    return link;
};
export const baseImgUrl = `https://image.tmdb.org/t/p`;
