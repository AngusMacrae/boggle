import React from 'react';
import './index.css';

export default function Board({ letters }) {
  return (
    <div className='Board'>
      {/* {letters} */}
      {letters.map(letter => (
        <span className='letter'>{letter}</span>
      ))}
    </div>
  );
}
