import React, {useState} from 'react';
import InputForm from './InputForm';

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
      <InputForm
        textLabel='Please choose the number of rows :'
        name='row'
        placeholder='Number of rows'
        value={initialValueRows}
        onChange={handleChangeRows}
      />
      <InputForm
        textLabel='Please choose the number of columns :'
        name='col'
        placeholder='Number of columns'
        value={initialValueColumns}
        onChange={handleChangeColumns}
      />
      <input type='submit' value='Generate gameboard' />
    </form>
  );
}

export default GameForm;
