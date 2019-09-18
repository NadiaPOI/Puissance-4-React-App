import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Home from './Home';
import GameForm from './GameForm';
import Gameboard from '../gameboard/Gameboard';

function App() {
  return (
    <Router>
      <h1>Puissance 4</h1>
      <Route exact path='/' component={Home} />
      <Route path='/form' component={GameForm} />
      <Route path='/gameboard' component={Gameboard} />
    </Router>
  );
}

export default App;
