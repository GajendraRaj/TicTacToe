import React from 'react';
import { constants } from '../constants';
import './App.css';
import { Game } from './Game';

function App() {
  return (
    <div className="App">
      <h1>{constants.APPLICATION_TITLE}</h1>
      <Game />
    </div>
  );
}

export default App;
