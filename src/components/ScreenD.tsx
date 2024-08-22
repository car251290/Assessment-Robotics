import React, { useContext } from 'react';
import { Context } from '../Context/Context';

const ScreenD = () => {
    const { bombs } = useContext(Context)!;
  
    return (
      <div className="screen screenD">
        <div className="exploded-screen">
          <h2>💥 Boom! All Bombs Exploded! 💥</h2>
        </div>
        <ul>
          {bombs.map(bomb => (
            <li key={bomb.name}>
              {bomb.name}: Exploded
            </li>
          ))}
        </ul>
        <button>All bombs exploded</button>
      </div>
    );
  };
  
  export default ScreenD;


