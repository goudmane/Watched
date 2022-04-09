import React from 'react'
import Movie from './Movie';

const MoviesList = ({movies}) => {
  return (
    <div className='row'>{movies.length>0 && movies.map((movie,idx)=>(<Movie movie={movie} key={idx}/>))}</div>
  )
}

export default MoviesList