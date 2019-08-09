import React from 'react';

import emptySquare from 'assets/empty.png';
import yellowSquare from 'assets/yellow.png';
import redSquare from 'assets/red.png';

function Square({indexSquare, colorSquare, actionOnClick}) {
  let pathImage = emptySquare;

  if (colorSquare === 'Y') {
    pathImage = yellowSquare;
  } else if (colorSquare === 'R') {
    pathImage = redSquare;
  }
  return (
    <td className={indexSquare} onClick={() => actionOnClick(indexSquare)}>
      <img src={pathImage} alt='img' />
    </td>
  );
}

export default Square;
