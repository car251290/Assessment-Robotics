
Timebomb React Project Documentation
Overview
The Timebomb React project is a web application that simulates a countdown for multiple timebombs. The application transitions through different screens to display the countdown and the status of each timebomb. The project uses React with TypeScript, Context API for state management, and includes test cases to ensure functionality.
<img width="1154" alt="Screenshot 2025-02-17 at 2 33 34 PM" src="https://github.com/user-attachments/assets/2aaabb6f-48e1-4197-82b9-047d75859a39" />
<img width="1149" alt="Screenshot 2025-02-17 at 2 33 04 PM" src="https://github.com/user-attachments/assets/74d4d92e-3d04-43bf-a5ad-4b3f6e3deace" />

<img width="1145" alt="Screenshot 2025-02-17 at 2 33 15 PM" src="https://github.com/user-attachments/assets/1a3f137a-cc62-4363-bc67-c1256ad6b5a5" />

<img width="1155" alt="Screenshot 2025-02-17 at 2 33 25 PM" src="https://github.com/user-attachments/assets/95678705-5aa1-4f06-984c-488e8125ce76" />

Project Structure:
src/: Contains all the source code for the project.
components/: Contains React components for different screens.
ScreenA.tsx: Displays a list of timebombs with an initial countdown.
ScreenB.tsx: Shows the countdown in progress and updates every second.
ScreenC.tsx: Displays each timebomb’s status when it explodes.
ScreenD.tsx: Shows a message once all bombs have exploded.
context/: Contains the Context API setup.
TimebombContext.tsx: Manages the state of the timebombs and current screen.
api/: Contains the API service for fetching bomb names.
ApiService.tsx: Provides mock data for bomb names.
App.tsx: The main application component that renders different screens based on the current state.
index.css: Contains global styles for the application.
__tests__/App.test.tsx: Contains test cases for the application.

Code Explanation
ApiService.tsx
tsx
Copy code
export class ApiService {
  static getBombNames(): Promise<string[]> {
    return new Promise((res) => {
      setTimeout(() => res(["Bomb A", "Bomb B", "Bomb C", "Bomb D"]), 1000);
    });
  }
}

Purpose: Provides mock data for the list of bomb names. Simulates an API call with a delay.
TimebombContext.tsx


Purpose: Manages the state for bombs, current screen, and provides functions to start the countdown and update the state.

Purpose: Renders different screens based on the current screen state.
ScreenA.tsx, ScreenB.tsx, ScreenC.tsx, and ScreenD.tsx
Each screen component is responsible for rendering its respective UI and functionality. They use styles and context to display the appropriate information and manage transitions.

App.css
Contains global styles for the application, including styling for screens and buttons.

__tests__/App.test.tsx

Purpose: Tests the functionality of the App component, including initial rendering and transitions between screens. Mocks API responses and simulates user interactions.

Conclusion
This project demonstrates how to build a React application with multiple screens, state management using Context API, and transitions based on time. The test cases ensure that the application behaves correctly across different screens and states. The use of styles and icons enhances the user interface and experience.
