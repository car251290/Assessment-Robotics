import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { Context } from './Context/Context';
import { ApiService } from './ApiService.ts/ApiService';

// Mock ApiService to avoid actual API calls during testing
jest.mock('../ApiService');

const mockApiService = ApiService as jest.Mocked<typeof ApiService>;

describe('App Component', () => {
  const bombs = [
    { name: 'Bomb A', time: 20 },
    { name: 'Bomb B', time: 13 },
    { name: 'Bomb C', time: 16 },
    { name: 'Bomb D', time: 10 },
  ];
// Before each test, mock the API response
  beforeEach(() => {
    // Mock the API response for the bomb names  cases A, B, C, and D
    mockApiService.getBombNames.mockResolvedValue(bombs.map(bomb => bomb.name));
  });
  // Test to verify the initial rendering of the App component
  it('renders ScreenA initially and transitions to other screens', async () => {
    render(
      <Context.Provider
        value={{
          bombs: bombs.map(bomb => ({ ...bomb, timeLeft: bomb.time })),
          setBombs: () => {},
          currentScreen: 'ScreenA',
          setCurrentScreen: () => {},
          startCountdown: () => {},
        }}
      >
        <App />
      </Context.Provider>
    );

    // Verify Screen A is rendered initially
    expect(screen.getByText('Explode')).toBeInTheDocument();
    bombs.forEach(bomb => {
      expect(screen.getByText(`${bomb.name}: ${bomb.time} seconds`)).toBeInTheDocument();
    });

    // Simulate button click to transition to ScreenB (time bomb explosion)
    fireEvent.click(screen.getByText('Explode'));

    // Wait for the screen transition
    await waitFor(() => {
      // Ensure ScreenB is rendered on time bomb explosion
      expect(screen.getByText('Waiting to explode...')).toBeInTheDocument();
      bombs.forEach(bomb => {
        expect(screen.getByText(`${bomb.name}: ${bomb.time}`)).toBeInTheDocument();
      });
    });
  });
});