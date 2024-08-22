import React, { useContext, useEffect } from 'react';
import { Context } from '../Context/Context';

const ScreenB = () => {
    const { bombs, setBombs, currentScreen } = useContext(Context)!;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setBombs(prevBombs => {
          const updatedBombs = prevBombs.map(bomb => ({
            ...bomb,
            timeLeft: Math.max(0, bomb.timeLeft - 1)
          }));
          return updatedBombs;
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }, [setBombs]);
  
    return (
      <div className="screen screenB">
        <h2>Countdown in Progress</h2>
        <ul>
          {bombs.map(bomb => (
            <li key={bomb.name}>
              {bomb.name}: {bomb.timeLeft} seconds
            </li>
          ))}
        </ul>
        <button>Waiting to explode...</button>
      </div>
    );
  };
  
  export default ScreenB;