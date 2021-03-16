import React from 'react';

const Person = ({ person }) => {
  return (
    <div className='card'>
      <h3>{person.name}</h3>
      <p>Eye Color - {person.eye_color} </p>
      <p>Hair Color- {person.hair_color} </p>
      <p>Height- {person.height} inches </p>
    </div>
  );
};

export default Person;
