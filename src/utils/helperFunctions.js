import { baseImgUrl } from "../API/moviesService";

export const createLinkFromData = (data) => {
    const key = data.results.filter(
        (video) =>
            video.type === "Trailer" && video.site === "YouTube" && video.key
    )[0].key;
    const link = `https://www.youtube.com/embed/${key}`;

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

export const rectifyImageLinks = (data, width) => {
    if (typeof data === "string") {
        return `${baseImgUrl}/${width}${data}`;
    } else if (typeof data === Object) {
        return data.map((d) => `${baseImgUrl}/${width}${d}`);
    }
};
