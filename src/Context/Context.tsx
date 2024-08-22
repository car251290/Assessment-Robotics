import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ApiService } from '../ApiService.ts/ApiService';


// Define Bomb type
interface Bomb {
  name: string;
  timeLeft: number;
}

// Define context type
interface ContextType {
  bombs: Bomb[];
  setBombs: React.Dispatch<React.SetStateAction<Bomb[]>>;
  currentScreen: string;
  setCurrentScreen: React.Dispatch<React.SetStateAction<string>>;
  startCountdown: () => void;
}

// Create context
export const Context = createContext<ContextType | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

// Context provider component
export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [bombs, setBombs] = useState<Bomb[]>([]);
  const [currentScreen, setCurrentScreen] = useState<string>('ScreenA');

  useEffect(() => {
    const fetchBombNames = async () => {
      const names = await ApiService.getBombNames();
      const initialBombs = names.map(name => {
        let timeLeft = 0;
        switch (name) {
          case 'Bomb A':
            timeLeft = 20;
            break;
          case 'Bomb B':
            timeLeft = 13;
            break;
          case 'Bomb C':
            timeLeft = 16;
            break;
          case 'Bomb D':
            timeLeft = 10;
            break;
          default:
            timeLeft = 20; // Default time
        }
        return { name, timeLeft };
      });
      setBombs(initialBombs);
    };

    fetchBombNames();
  }, []);

  const startCountdown = () => {
    setCurrentScreen('ScreenB');
    const interval = setInterval(() => {
      setBombs(prevBombs => {
        const updatedBombs = prevBombs.map(bomb => ({
          ...bomb,
          timeLeft: Math.max(0, bomb.timeLeft - 1)
        }));

        const allExploded = updatedBombs.every(bomb => bomb.timeLeft === 0);
        const anyExploded = updatedBombs.some(bomb => bomb.timeLeft === 0);

        if (allExploded) {
          setCurrentScreen('ScreenD');
          clearInterval(interval);
        } else if (anyExploded) {
          setCurrentScreen('ScreenC');
        }

        return updatedBombs;
      });
    }, 1000);

    return () => clearInterval(interval);
  };

  return (
    <Context.Provider value={{ bombs, setBombs, currentScreen, setCurrentScreen, startCountdown }}>
      {children}
    </Context.Provider>
  );
};