import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
  const res = await fetch('https://swapi.dev/api/planets/');
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets, {
    staleTime: 2000,
  });
  console.log(data);
  return (
    <div>
      <h2>Planets</h2>
      {status === 'loading' && <div>Loading epic data</div>}
      {status === 'error' && <div>There was an error fetching data.</div>}
      {status === 'success' && (
        <div>
          {data.results.map((planet) => (
            <div>{<Planet key={planet.name} planet={planet} />}</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Planets;
