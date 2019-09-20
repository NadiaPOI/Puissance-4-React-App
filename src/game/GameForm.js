import React, {useState} from 'react';

import InputForm from './InputForm';

function GameForm({history}) {
  const [rows, setRows] = useState(4);
  const [columns, setColumns] = useState(4);

  function handleChangeRows(e) {
    const valueRows = e.target.value ? parseInt(e.target.value) : null;
    setRows(valueRows);
  }

  function handleChangeColumns(e) {
    const valueColumns = e.target.value ? parseInt(e.target.value) : null;
    setColumns(valueColumns);
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/gameboard?row=${rows}&col=${columns}`);
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
