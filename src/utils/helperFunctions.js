import { baseImgUrl } from "../API/moviesService";

export const createLinkFromData = (data) => {
    const key = data.filter(
        (video) =>
            video.type === "Trailer" && video.site === "YouTube" && video.key
    )[0].key;
    const link = `https://www.youtube-nocookie.com/embed/${key}/`;

    return link;
};

export const getDirectorFromCrew = (crew) => {
    return crew.filter((person) => person.job === "Director");
};

export const getWritersFromCrew = (crew) => {
    return crew.filter(
        (person) => person.job === "Writer" || person.job === "Novel"
    );
};

export const rectifyMovieData = (data) => {
    if (Array.isArray(data)) {
        return data.map((movie) => ({
            ...movie,
            poster_path: rectifyImageLinks(movie.poster_path, "w300"),
            backdrop_path: rectifyImageLinks(movie.backdrop_path, "original"),
        }));
    }
    return {
        ...data,
        poster_path: rectifyImageLinks(data.poster_path, "w300"),
        backdrop_path: rectifyImageLinks(data.backdrop_path, "original"),
    };
};

export const rectifyImageLinks = (data, width = "original") => {
    if (typeof data === "string") {
        return `${baseImgUrl}/${width}${data}`;
    } else if (typeof data === Object) {
        return data.map((d) => `${baseImgUrl}/${width}${d}`);
    }
    return data;
};
