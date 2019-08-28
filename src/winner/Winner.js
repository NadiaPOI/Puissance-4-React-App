import React from 'react';

function Winner({player, restartGame}) {
  return (
    <div className='displayWinner'>
      <p>Great !! {player === 'Y' ? 'Yellow' : 'Red'} player win !</p>
      <button className='restart' onClick={() => restartGame()}>
        Start again
      </button>
    </div>
  );
}

export default Winner;
