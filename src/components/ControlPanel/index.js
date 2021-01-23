import React from 'react';
import './index.css';
import shuffle from '../../functions/shuffle';
import getRandomElement from '../../functions/getRandomElement';
import cubes from '../../data/cubes.json';

export default function ControlPanel({ setLetters }) {
  function startGame() {
    const indices = [];
    for (let i = 0; i < 16; i++) {
      indices.push(i);
    }
    const cubeOrder = shuffle(indices);
    const letters = cubeOrder.map(cubeIndex => getRandomElement(cubes[cubeIndex]));
    setLetters(letters);
  }

  return (
    <div className='flow'>
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
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}
