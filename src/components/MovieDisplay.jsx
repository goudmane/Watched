import React from "react";

const MovieDisplay = ({ movie }) => {
    return (
        <div className="movie-display">
            <div className="movie-poster">
                <div className="poster">
                    <img src={movie.poster_path} alt={movie.title} />
                </div>
                <div className="info">
                    <div className="box">
                        <div className="label">Director</div>
                        <div className="content">
                            {movie.director.map((c) => c.name).join(", ")}
                        </div>
                    </div>
                    <div className="box">
                        <div className="label">Writers</div>
                        <div className="content">
                            {movie.writers.map((c) => c.name).join(", ")}
                        </div>
                    </div>
                    <div className="box">
                        <div className="label">Cast</div>
                        <div className="content">
                            {movie.cast
                                .slice(0, 4)
                                .map((c) => c.name)
                                .join(", ")}
                        </div>
                    </div>
                    <hr />
                    <div className="box">
                        <div className="label">Plot</div>
                        <div className="content">{movie.overview}</div>
                    </div>
                </div>
            </div>
            <div className="movie-trailer">
                <iframe
                    width="100%"
                    height="100%"
                    src={movie.youtube_link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default MovieDisplay;
