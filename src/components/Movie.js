import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div className='card'>
      <h3>{movie.title}</h3>
      <p>Episode- {movie.episode_id}</p>
      <p>Release date - {movie.release_date}</p>
      <p className='crawl'>Opening- {movie.opening_crawl}</p>
    </div>
  );
};

export default Movie;
