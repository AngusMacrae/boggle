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
    <div className='ControlPanel'>
      <button onClick={startGame}>Start Game</button>
      <CountDownTimer seconds={secondsRemaining} />
      {gameState === 'FINISHED' && <span>Finished!</span>}
    </div>
  );
}
