import React, {useState} from 'react';

import Square from './Square';
import generateGameboard from '../scripts/generateGameboard.logic';
import addPawn from '../scripts/addPawn.logic';
import aIAddPawn from '../scripts/aIAddPawn.logic';
import findEmptyColumn from '../scripts/findEmptyColumns.logic';

function Gameboard({rows, columns}) {
  const initialBoard = generateGameboard(rows, columns);
  const [board, setBoard] = useState(initialBoard);

  function renderGameboard(board) {
    return board.map((row, indexRow) => (
      <tr key={indexRow} id={indexRow}>
        {row.map((square, indexSquare) => {
          return renderSquares(indexSquare, indexRow, square);
        })}
      </tr>
    ));
  }

  function renderSquares(indexSquare, indexRow, square) {
    return (
      <Square
        key={indexSquare}
        indexSquare={indexSquare}
        indexRow={indexRow}
        colorSquare={square}
        actionOnClick={handleClick}
      />
    );
  }

  function addRandomRedPawn(board) {
    const randomColumn = findEmptyColumn(board, Math.random);
    aIAddPawn(board, randomColumn);
  }

  function handleClick(indexCol) {
    const newBoard = board.slice();
    addPawn(newBoard, indexCol, 'Y');
    addRandomRedPawn(newBoard);
    return setBoard(newBoard);
  }

  return (
    <table className='gameboard'>
      <tbody>{renderGameboard(board)}</tbody>
    </table>
  );
}

export default Gameboard;
