import React, {useState} from 'react';

import GameForm from './GameForm';
import Gameboard from '../gameboard/Gameboard';

function Home() {
  const [isFormDisplayed, setFormDisplayed] = useState(false);
  const [isBoardDisplayed, setBoardDisplayed] = useState(false);

  const [valueRows, setValueRows] = useState(4);
  const [valueColumns, setValueColumns] = useState(4);

  const boardDisplayed = (value) => setBoardDisplayed(value);
  const formDisplayed = () => setFormDisplayed(true);

  const addRows = (value) => setValueRows(value);
  const addColumns = (value) => setValueColumns(value);

  return (
    <>
      {isBoardDisplayed ? (
        <Gameboard
          rows={valueRows}
          columns={valueColumns}
          boardDisplayed={boardDisplayed}
          formDisplayed={formDisplayed}
        />
      ) : (
        <>
          {isFormDisplayed ? (
            <GameForm
              boardDisplayed={boardDisplayed}
              addRows={addRows}
              addColumns={addColumns}
            />
          ) : (
            <button
              type='button'
              className='start'
              onClick={() => setFormDisplayed(true)}
            >
              Start a Game
            </button>
          )}
        </>
      )}
    </>
  );
}

export default Home;
