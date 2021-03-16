import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  return res.json();
};
const People = () => {
  const { data, status } = useQuery('people', fetchPeople);
  return (
    <div>
      <h2>People</h2>
      {status === 'error' && <p>Problem loading data</p>}
      {status === 'loading' && <p>Loading data...</p>}
      {status === 'success' && (
        <div>
          {data.results.map((person) => (
            <div>{<Person key={person.name} person={person} />}</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default People;
