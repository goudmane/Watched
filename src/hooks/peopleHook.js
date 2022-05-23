import { useState, useEffect } from "react";
import { getPersonDetail, getPersonMovieCredit } from "../API/moviesService";
import { rectifyImageLinks, rectifyMovieData } from "../utils/helperFunctions";

export const useFecthRequestPeople = (personId) => {
    const [person, setPerson] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                // Async Action
                const [detail, { crew, cast }] = await Promise.all([
                    getPersonDetail(personId),
                    getPersonMovieCredit(personId),
                ]);
                setPerson(() => ({
                    ...detail,
                    profile_path: rectifyImageLinks(detail.profile_path),
                    cast: rectifyMovieData(cast).sort(
                        (a, b) =>
                            new Date(b.release_date).getFullYear() -
                            new Date(a.release_date).getFullYear()
                    ),
                    crew: rectifyMovieData(crew).sort(
                        (a, b) =>
                            new Date(b.release_date).getFullYear() -
                            new Date(a.release_date).getFullYear()
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
    }, [personId]);
    return { person, loading, error };
};
