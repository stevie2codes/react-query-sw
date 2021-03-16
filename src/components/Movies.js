import React from 'react';
import { useQuery } from 'react-query';
import Movie from './Movie';

const getMovies = async () => {
  const res = await fetch('https://swapi.dev/api/films/');
  return res.json();
};

const Movies = () => {
  const { data, status } = useQuery('movies', getMovies);
  console.log(data);
  return (
    <div>
      <h2>Movies</h2>
      {status === 'error' && <h1>Something is wrong in the force</h1>}
      {status === 'loading' && <p>Loading movies...</p>}
      {status === 'success' && (
        <div>
          {data.results.map((movie) => (
            <div>{<Movie key={movie.title} movie={movie} />}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
