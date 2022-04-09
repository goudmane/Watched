import React, { useState } from 'react'
import MoviesList from '../components/MoviesList'
import Search from '../components/Search';
import { moviesData } from '../data/moviesData';

const Movies = () => {
    const [movies, setMovies] = useState(moviesData);
    const [filteredMovies, setFilteredMovies] = useState(movies)
  return (
    <div>
        <Search setMovies={setFilteredMovies} movies={movies}/>
        <MoviesList movies={filteredMovies}/>
    </div>
  )
}

export default Movies