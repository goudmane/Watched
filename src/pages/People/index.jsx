import React from "react";
import { useParams } from "react-router-dom";

const People = () => {
    const { personId } = useParams();

    return <div>People</div>;
};

export default People;
