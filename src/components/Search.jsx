import React, { useEffect, useState } from 'react'

const Search = ({setMovies, movies}) => {
    const [query, setQuery] = useState("");
    useEffect(()=>{
        setMovies(()=> movies.filter((movie)=> movie.title.toLowerCase().includes(query.toLowerCase())))
    },[query])
  return (
    <div>
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
    </div>
  )
}

export default Search