import React, { useContext } from 'react';
import { Context } from '../Context/Context';

const ScreenA = () => {
    const { bombs, startCountdown } = useContext(Context)!;
  
    return (
      <div className="screen screenA">
        <h2>Timebomb</h2>
        <ul>
          {bombs.map(bomb => (
            <li key={bomb.name}>
              {bomb.name}: {bomb.timeLeft} seconds
            </li>
          ))}
        </ul>
        <button onClick={startCountdown}>Explode</button>
      </div>
    );
  };
  
  export default ScreenA;