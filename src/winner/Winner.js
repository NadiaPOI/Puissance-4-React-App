import React from 'react';
import {Link} from 'react-router-dom';

function Winner({player}) {
  return (
    <div className='displayWinner'>
      <p>Great !! {player === 'Y' ? 'Yellow' : 'Red'} player win !</p>
      <Link className='restart' to='/'>
        Start again
      </Link>
    </div>
  );
}

export default Winner;
