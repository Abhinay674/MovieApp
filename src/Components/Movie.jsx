import React from 'react'

function Movie({ data: { poster_path, title, vote_average, overview } }) {
  const images = 'https://image.tmdb.org/t/p/w1280';
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  }
  return (
    <div className='movie' >
      <img src={poster_path ? (images + poster_path) : 'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} alt={title} />
      <div className="movieInfo">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`} >{vote_average}</span>
      </div>
      <div className="movieOver">
        <h2>Overview: </h2>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default Movie
