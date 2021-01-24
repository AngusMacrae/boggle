import React, { useState, useEffect } from 'react';
import './index.css';
import shuffle from '../../functions/shuffle';
import getRandomElement from '../../functions/getRandomElement';
import cubes from '../../data/cubes.json';
import CountDownTimer from './CountDownTimer';

export default function ControlPanel({ setLetters, gameState, setGameState }) {
  const [secondsRemaining, setSecondsRemaining] = useState(7);

  function startGame() {
    const indices = [];
    for (let i = 0; i < 16; i++) {
      indices.push(i);
    }
    const cubeOrder = shuffle(indices);
    const letters = cubeOrder.map(cubeIndex => getRandomElement(cubes[cubeIndex]));
    setLetters(letters);
    setGameState('IN PROGRESS');
  }

  useEffect(() => {
    let countDown = null;
    if (gameState === 'IN PROGRESS') {
      countDown = setInterval(() => {
        if (secondsRemaining === 0) {
          clearInterval(countDown);
          setGameState('FINISHED');
        } else {
          setSecondsRemaining(prevValue => prevValue - 1);
        }
      }, 1000);
    } else {
      clearInterval(countDown);
    }
    return () => {
      clearInterval(countDown);
    };
  }, [gameState, setGameState, secondsRemaining]);

  return (
    <div className='flow ControlPanel'>
      <h2>Instructions</h2>
      <p>Click the Start button to set the timer running, and try to combine the letters to form as many words as you can before it reaches zero!</p>
      <p>Words can be formed from 3 or more letters. Letters must be directly adjacent to each other (including diagonally) in order to be linked together.</p>
      <h2>Scoring</h2>
      <ul>
        <li>3/4 letters: 1 point</li>
        <li>5 letters: 2 points</li>
        <li>6 letters: 3 points</li>
        <li>7 letters: 4 points</li>
        <li>8+ letters: 5 points</li>
      </ul>
      <div className='controls'>
        {gameState === 'IDLE' && <button onClick={startGame}>Start Game</button>}
        {gameState === 'IN PROGRESS' && <CountDownTimer seconds={secondsRemaining} />}
        {gameState === 'FINISHED' && <span>Finished!</span>}
      </div>
    </div>
  );
}
