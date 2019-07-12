import React, {useState} from 'react';
import GameForm from './GameForm';

function Home() {
  const [isFormDisplayed, setFormDisplay] = useState(false);

  return (
    <div>
      {isFormDisplayed ? (
        <GameForm />
      ) : (
        <button type='button' id='start' onClick={() => setFormDisplay(true)}>
          Start a Game
        </button>
      )}
    </div>
  );
}

export default Home;
