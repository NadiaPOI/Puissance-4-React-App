import React, {useState} from 'react';

function GameForm() {
  const [initialValueRows, setValueRows] = useState(0);
  const [initialValueColumns, setValueColumns] = useState(0);

  function generateGameboard(lengthRow, lengthColumn) {
    let gameboard = new Array(lengthRow)
      .fill(null)
      .map(() => new Array(lengthColumn).fill(''));
    return gameboard;
  }

  function handleChangeRows() {
    setValueRows(initialValueRows + 1);
  }

  function handleChangeColumns() {
    setValueColumns(initialValueColumns + 1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let gameboard = generateGameboard(initialValueRows, initialValueColumns);
    console.log(gameboard);
    return gameboard;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='row'>Please choose the number of rows :</label>
      <input
        type='number'
        name='row'
        id='row'
        placeholder='Number of rows'
        min='4'
        max='50'
        required
        value={initialValueRows}
        onChange={handleChangeRows}
      />
      <label htmlFor='col'>Please choose the number of columns :</label>
      <input
        type='number'
        name='col'
        id='col'
        placeholder='Number of columns'
        min='4'
        max='50'
        required
        value={initialValueColumns}
        onChange={handleChangeColumns}
      />
      <input type='submit' value='Generate gameboard' />
    </form>
  );
}

export default GameForm;
