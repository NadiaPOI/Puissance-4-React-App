import React from 'react';

function GameForm() {
  return (
    <form>
      <label htmlFor='row'>Please choose the number of rows :</label>
      <input
        type='number'
        name='row'
        id='row'
        placeholder='Number of rows'
        min='4'
        max='50'
        required
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
      />
      <input type='submit' value='Generate gameboard' />
    </form>
  );
}

export default GameForm;
