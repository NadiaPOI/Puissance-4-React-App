import React from 'react';

function Home() {
  return (
    <div>
      <h1>Puissance 4</h1>
      <button type="button" id="start" onClick={() => console.log('clicked')}>
        Start a Game
      </button>
    </div>
  );
}

export default Home;
