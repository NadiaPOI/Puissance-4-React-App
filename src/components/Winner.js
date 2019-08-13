import React from 'react';

function Winner({player}) {
  return (
    <div className='displayWinner'>
      <p>Great !! {player === 'Y' ? 'Yellow' : 'Red'} player win !</p>
      <button className='restart'>Start again</button>
    </div>
  );
}

export default Winner;
