import React, { useContext } from 'react';
import { Context } from '../Context/Context'; 
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';
import ScreenD from './ScreenD';

export const UserList = () => {
  const context = useContext(Context);

  if (!context) {
    return <p>Loading...</p>;
  }

  const { currentScreen, setCurrentScreen } = context;

  const handleScreenChange = (screen: string) => {
    setCurrentScreen(screen);
  };

  return (
    <div>
      {currentScreen === 'ScreenA' && <ScreenA />}
      {currentScreen === 'ScreenB' && <ScreenB />}
      {currentScreen === 'ScreenC' && <ScreenC />}
      {currentScreen === 'ScreenD' && <ScreenD />}
    </div>
  );
};

