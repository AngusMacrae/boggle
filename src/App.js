import React, { useState } from 'react';
import './App-reset.css';
import './App.css';
// import logo from './img/logo.svg';
import Board from './components/Board';
import ControlPanel from './components/ControlPanel';

function App() {
  const [letters, setLetters] = useState(Array(16).fill('?'));
  return (
    <>
      <header className='App-header'>
        <h1>Boggle!</h1>
      </header>
      <main className='App-main'>
        <Board letters={letters} />
        <ControlPanel setLetters={setLetters} />
      </main>
      <footer className='App-footer'>
        <small>Angus Macrae | 2021</small>
      </footer>
    </>
  );
}

export default App;
