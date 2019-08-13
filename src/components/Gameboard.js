import React, {useState} from 'react';

import generateGameboard from 'scripts/generateGameboard.logic';
import addPawn from 'scripts/addPawn.logic';
import aIAddPawn from 'scripts/aIAddPawn.logic';
import findEmptyColumn from 'scripts/findEmptyColumns.logic';
import isWinner from 'scripts/isWinner.logic';

import Winner from './Winner';
import Row from './Row';

function Gameboard({rows, columns}) {
  const initialBoard = generateGameboard(rows, columns);
  const [board, setBoard] = useState(initialBoard);

  const [winner, setWinner] = useState(false);
  const [colorWinner, setColorWinner] = useState();

  const rowsElements = board.map((row, indexRow) => {
    return (
      <Row row={row} key={indexRow} indexRow={indexRow} onClick={handleClick} />
    );
  });

  function addRandomRedPawn(board) {
    const randomColumn = findEmptyColumn(board, Math.random);
    aIAddPawn(board, randomColumn);

    const indexRow = board.findIndex((row) => {
      return row.includes('R');
    });

    checkIfWinner(board, indexRow, randomColumn, 'R');
  }

  function checkIfWinner(board, row, column, colorPlayer) {
    const playerWin = isWinner(board, row, column, colorPlayer);

    if (playerWin) {
      setColorWinner(colorPlayer);
      setWinner(true);
    }
    return playerWin;
  }

  function handleClick(indexCol, indexRow) {
    const newBoard = board.slice();

    if (!winner) {
      addPawn(newBoard, indexCol, 'Y');
      const yellowWinner = checkIfWinner(newBoard, indexRow, indexCol, 'Y');

      if (!yellowWinner) {
        addRandomRedPawn(newBoard);
      }
    }
    setBoard(newBoard);
  }

  return (
    <>
      {winner && <Winner player={colorWinner} />}
      <table className='gameboard'>
        <tbody>{rowsElements}</tbody>
      </table>
    </>
  );
}

export default Gameboard;
