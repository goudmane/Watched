import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { Cast } from ".";
const MovieCast = ({ cast }) => {
    return (
        <>
            <h2 className="title-label">Cast:</h2>
            <div className="cast-grid">
                {cast.map((cast, idx) => (
                    <Cast cast={cast} key={idx} />
                ))}
                <h3 className="see-more">
                    Click to see more <IoIosArrowDropright />
                </h3>
            </div>
        </>
    );
};

export default MovieCast;
