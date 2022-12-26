import React from 'react'
import Movie from './Components/Movie'
import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchmovies()
  }, []);

  const fetchmovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1');
    const data = await response.json();
    setMovies(data.results);
  }

  const fetchSearchResults = async () => {
    const response = await fetch('https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=' + searchTerm);
    const data = await response.json();
    setMovies(data.results);
  }

  const handleSubmit = (e) => {
    if (searchTerm) {
      fetchSearchResults();
      setSearchTerm('');
    }
    e.preventDefault();
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <form onSubmit={handleSubmit} >
          <input type="text" placeholder='Search...' onChange={handleChange} className='search' value={searchTerm} />
        </form>
      </header>
      <div className='container' >
        {movies.length > 0 && movies.map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}
      </div>
    </>
  )
}

export default App
