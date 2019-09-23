import React from 'react';
import PropTypes from 'prop-types';

import emptySquare from 'assets/empty.png';
import yellowSquare from 'assets/yellow.png';
import redSquare from 'assets/red.png';

export default function Square({
  indexSquare,
  indexRow,
  colorSquare,
  actionOnClick
}) {
  let pathImage = emptySquare;

  if (colorSquare === 'Y') {
    pathImage = yellowSquare;
  } else if (colorSquare === 'R') {
    pathImage = redSquare;
  }

  return (
    <td
      className={indexSquare}
      onClick={() => actionOnClick(indexSquare, indexRow)}
    >
      <img src={pathImage} alt='img' />
    </td>
  );
}

Square.propTypes = {
  indexSquare: PropTypes.number.isRequired,
  indexRow: PropTypes.number.isRequired,
  colorSquare: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired
};
