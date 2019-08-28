import React from 'react';
import Square from './Square';

function Row({row, indexRow, onClick}) {
  return (
    <tr row={row} key={indexRow} id={indexRow}>
      {row.map((square, indexSquare) => {
        return (
          <Square
            key={indexSquare}
            indexSquare={indexSquare}
            indexRow={indexRow}
            colorSquare={square}
            actionOnClick={() => onClick(indexSquare, indexRow)}
          />
        );
      })}
    </tr>
  );
}

export default Row;
