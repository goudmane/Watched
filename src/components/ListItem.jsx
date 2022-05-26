import React from "react";

const ListItem = ({ movie }) => {
    return (
        <div className="list-item">
            <div className="meta">
                <div className="title">{movie.title}</div>
                <div className="character">{movie.caharcter}</div>
            </div>
            <div className="year">
                {new Date(movie.release_year).getFullYear()}
            </div>
        </div>
    );
};

export default ListItem;
