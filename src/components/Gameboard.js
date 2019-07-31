import React from 'react';
import emptySquare from '../empty.png';

function generateGameboard(lengthRow, lengthColumn) {
  let gameboard = new Array(lengthRow)
    .fill(null)
    .map(() => new Array(lengthColumn).fill(''));
  return gameboard;
}

function Gameboard({rows, columns}) {
  let gameboard = generateGameboard(rows, columns);
  const board = gameboard.map((row, indexRow) => {
    const squares = row.map((square, indexCol) => {
      return (
        <td key={indexCol} className={indexCol}>
          <img src={emptySquare} alt='img' />
        </td>
      );
    });
    return (
      <tr key={indexRow} id={indexRow}>
        {squares}
      </tr>
    );
  });

  return (
    <table className='gameboard'>
      <tbody>{board}</tbody>
    </table>
  );
}

export default Gameboard;
