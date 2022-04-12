import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const baseUrl = `https://api.themoviedb.org/3`;
const API = axios.create({
    baseURL: baseUrl,
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
});
export const getAllMovies = async () => {
    const response = await API.get(`/discover/movie`);
    const data = await response.data;
    console.log(data);
    return data;
};

export const getMoviesByEndPoint = async (endPoint, pageNum) => {
    const response = await API.get(endPoint, {
        params: {
            page: pageNum,
        },
    });
    const data = await response.data;
    return data;
};

export const baseImgUrl = `https://image.tmdb.org/t/p`;
