import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ movie }) => {
    return (
        <div className="list-item">
            <div className="meta">
                <div className="title">
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                </div>
                <div className="character">{movie.character}</div>
            </div>
            <div className="year">
                {new Date(movie.release_date).getFullYear() || "--"}
            </div>
        </div>
    );
};

export default ListItem;
