import React, { useState } from 'react'

const Movie = ({movie}) => {
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        setLiked(prev=> !prev)
    }
  return (
    <div className='col-lg-4 col-mg-6 col-sm-12 p-1'>
       <div className="card" style={{width: "100%"}}>
        <img src={movie.poster} className="card-img-top" alt={movie.title} />
        <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="card-text text-muted">{movie.released}</div>
                <div className="card-text text-muted">{movie.imdbRating}/10</div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="text-muted">{movie.genre}</div>
            <button className={`btn ${liked ? "btn-primary" : "btn-outline-primary"}`} onClick={handleLike}>Like</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Movie