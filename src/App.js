import React, { useState } from 'react';
import './App-reset.css';
import './App.css';
// import logo from './img/logo.svg';
import Board from './components/Board';
import ControlPanel from './components/ControlPanel';

function App() {
  const [letters, setLetters] = useState(Array(16).fill('?'));
  const [gameState, setGameState] = useState('IDLE');

  return (
    <>
      <header className='App-header'>
        <h1>Boggle!</h1>
      </header>
      <main className='App-main'>
        <div className='App-game'>
          <Board letters={letters} />
          <ControlPanel setLetters={setLetters} gameState={gameState} setGameState={setGameState} />
        </div>
        <div className='App-info'>
          <div className='flow'>
            <h2>Instructions</h2>
            <p>Click the Start button to set the timer running, and try to combine the letters to form as many words as you can before it reaches zero!</p>
            <p>Words can be formed from 3 or more letters. Letters must be directly adjacent to each other (including diagonally) in order to be linked together.</p>
          </div>
          <div className='flow'>
            <h2>Scoring</h2>
            <ul>
              <li>3/4 letters: 1 point</li>
              <li>5 letters: 2 points</li>
              <li>6 letters: 3 points</li>
              <li>7 letters: 4 points</li>
              <li>8+ letters: 5 points</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className='App-footer'>
        <small>Angus Macrae | 2021</small>
      </footer>
    </>
  );
}

export default App;
