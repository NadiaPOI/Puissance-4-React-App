import React, {useState} from 'react';

function GameForm({statusDisplay, valueRows, valueColumns}) {
  const [initialValueRows, setValueRows] = useState(0);
  const [initialValueColumns, setValueColumns] = useState(0);

  function handleChangeRows() {
    setValueRows(initialValueRows + 1);
  }

  function handleChangeColumns() {
    setValueColumns(initialValueColumns + 1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    statusDisplay();
    valueRows(initialValueRows);
    valueColumns(initialValueColumns);
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
