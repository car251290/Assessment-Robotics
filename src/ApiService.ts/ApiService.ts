// src/ApiService.tsx
export class ApiService {
    static getBombNames(): Promise<string[]> {
      return new Promise((res) => {
        setTimeout(() => res(["Bomb A", "Bomb B", "Bomb C", "Bomb D"]), 1000); // Example names
      });
    }
  }