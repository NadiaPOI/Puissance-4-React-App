import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import './App.css';
import Home from './Home';
import GameForm from './GameForm';
import Gameboard from '../gameboard/GameboardWrapper';
import store from '../store/app-store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <h1>Puissance 4</h1>
        <Route exact path='/' component={Home} />
        <Route path='/form' component={GameForm} />
        <Route path='/gameboard' component={Gameboard} />
      </Router>
    </Provider>
  );
}

export default App;
