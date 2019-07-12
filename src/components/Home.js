import React, {useState} from 'react';
import GameForm from './GameForm';

function Home() {
  const [isDisplay, setDisplay] = useState(false);

  return (
    <div>
      {isDisplay ? (
        <GameForm />
      ) : (
        <button type='button' id='start' onClick={() => setDisplay(true)}>
          Start a Game
        </button>
      )}
    </div>
  );
}

export default Home;
