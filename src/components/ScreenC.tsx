import React, { useContext } from 'react';
import { Context } from '../Context/Context';

const ScreenC = () => {
    const { bombs } = useContext(Context)!;
  
    return (
      <div className="screen screenC">
        <h2>Individual Bombs Explode</h2>
        <ul>
          {bombs.map(bomb => (
            <li key={bomb.name}>
              {bomb.name}: {bomb.timeLeft === 0 ? 'Exploded' : `${bomb.timeLeft} seconds`}
            </li>
          ))}
        </ul>
        <button>Waiting to explode...</button>
      </div>
    );
  };
  
  export default ScreenC;

