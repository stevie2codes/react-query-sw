import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import People from './components/People';
import Planets from './components/Planets';
import Navbar from './components/Navbar';
import Movies from './components/Movies';

function App() {
  const [page, setPage] = useState('planets');
  return (
    <>
      <div className='App'>
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className='content'>
          {(page === 'planets' && <Planets />) ||
            (page === 'people' && <People />) ||
            (page === 'movies' && <Movies />)}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
