import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <Link to='/form' className='button'>
      Start a Game
    </Link>
  );
}

export default Home;
