import React, {useState} from 'react';
import InputForm from './InputForm';

function GameForm({boardDisplayed, addRows, addColumns}) {
  const [rows, setRows] = useState(4);
  const [columns, setColumns] = useState(4);

  function handleChangeRows(e) {
    const valueRows = parseInt(e.target.value);
    setRows(valueRows);
  }

  function handleChangeColumns(e) {
    const valueColumns = parseInt(e.target.value);
    setColumns(valueColumns);
  }

  function handleSubmit(event) {
    event.preventDefault();
    boardDisplayed(true);
    addRows(rows);
    addColumns(columns);
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
