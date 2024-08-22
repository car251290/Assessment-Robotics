import React,{useContext} from 'react';
import { ContextProvider, Context } from './Context/Context';
import  ScreenA  from './components/ScreenA';
import ScreenB  from './components/ScreenB';
import  ScreenC  from './components/ScreenC'; 
import  ScreenD  from './components/ScreenD';

const App = () => {
  const context = useContext(Context);
  if(!context){
    throw new Error('You probably forgot to put the ContextProvider');
  }
  const {currentScreen} = context;

  return (
    <div className="app">
      {currentScreen === 'ScreenA' && <ScreenA />}
      {currentScreen === 'ScreenB' && <ScreenB />}
      {currentScreen === 'ScreenC' && <ScreenC />}
      {currentScreen === 'ScreenD' && <ScreenD />}
    </div>
  );
};

const RootApp = () => (
  <ContextProvider>
    <App />
  </ContextProvider>
);

export default RootApp;