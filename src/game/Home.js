import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <Link to='/form' className='start'>
      Start a Game
    </Link>
  );
}

export default Home;
