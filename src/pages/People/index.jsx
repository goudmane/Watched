import React from "react";
import { useParams } from "react-router-dom";

const People = () => {
    const { personId } = useParams();

    return (
        <section>
            <h2>People: [{personId}]</h2>
        </section>
    );
};

export default People;
