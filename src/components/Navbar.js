import React from 'react';

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage('planets')}>Planets</button>
      <button onClick={() => setPage('people')}>People</button>
      <button onClick={() => setPage('movies')}>Movies</button>
    </nav>
  );
};

export default Navbar;
