import React from "react";
import { Link } from "react-router-dom";
import DefaultImage from "../assets/images/placeholder-image.png";
const Cast = ({ cast }) => {
    return (
        <div className="cast">
            <Link to={`/people/${cast.id}`}>
                <div className="cast-img-container">
                    <img
                        src={cast.profile_path || DefaultImage}
                        alt="cast-img"
                    />
                </div>
                <div className="cast-detail">
                    <h3 className="cast-name">{cast.name}</h3>
                    <h3 className="cast-character">{cast.character}</h3>
                </div>
            </Link>
        </div>
    );
};

export default Cast;
