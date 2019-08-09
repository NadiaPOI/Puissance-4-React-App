import React, {useState} from 'react';
import InputForm from './InputForm';

function GameForm({statusDisplay, valueRows, valueColumns}) {
  const [rows, setRows] = useState(4);
  const [columns, setColumns] = useState(4);

  function handleChangeRows() {
    setRows((prevRows) => prevRows + 1);
  }

  function handleChangeColumns() {
    setColumns((prevColumns) => prevColumns + 1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    statusDisplay();
    valueRows(rows);
    valueColumns(columns);
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        textLabel='Please choose the number of rows :'
        name='row'
        placeholder='Number of rows'
        value={rows}
        onChange={handleChangeRows}
      />
      <InputForm
        textLabel='Please choose the number of columns :'
        name='col'
        placeholder='Number of columns'
        value={columns}
        onChange={handleChangeColumns}
      />
      <input type='submit' value='Generate gameboard' />
    </form>
  );
}

export default GameForm;
