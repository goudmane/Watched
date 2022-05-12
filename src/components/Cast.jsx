import React from "react";
import DefaultImage from "../assets/images/placeholder-image.png";
const Cast = ({ cast }) => {
    return (
        <div className="cast">
            <div className="cast-img-container">
                <img src={cast.profile_path || DefaultImage} alt="cast-img" />
            </div>
            <div className="cast-detail">
                <h3 className="cast-name">{cast.name}</h3>
                <h3 className="cast-character">{cast.character}</h3>
            </div>
        </div>
    );
};

export default Cast;
