import { useState, useEffect } from "react";

export const useFecthRequestPeople = (personId) => {
    const [person, setPerson] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                // Async Action
            } catch (error) {
                console.log(error);
                setError(error.response);
            } finally {
                setLoading(false);
            }
        })();
    }, [personId]);
    return { person, loading, error };
};
