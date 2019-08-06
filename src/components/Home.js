import React, {useState} from 'react';

import GameForm from './GameForm';
import Gameboard from './Gameboard';

function Home() {
  const [isFormDisplayed, setFormDisplay] = useState(false);
  const [isBoardDisplayed, setBoardDisplay] = useState(false);

  const [initialValueRows, setValueRows] = useState(0);
  const [initialValueColumns, setValueColumns] = useState(0);

  const boardDisplay = () => setBoardDisplay(true);

  const valueRows = (value) => setValueRows(value);
  const valueColumns = (value) => setValueColumns(value);

  return (
    <div>
      {isBoardDisplayed ? (
        <Gameboard rows={initialValueRows} columns={initialValueColumns} />
      ) : (
        <div>
          {isFormDisplayed ? (
            <GameForm
              statusDisplay={boardDisplay}
              valueRows={valueRows}
              valueColumns={valueColumns}
            />
          ) : (
            <button
              type='button'
              className='start'
              onClick={() => setFormDisplay(true)}
            >
              Start a Game
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
