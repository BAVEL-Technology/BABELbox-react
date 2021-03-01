/* Import React, useContext, and useState from react */
import React, { useContext, useState } from "react";

/* Create a context to hold state and context to update state */
const GameContext = React.createContext();
const GameUpdateContext = React.createContext();

/* Export two custom hooks to view state and update state */
export function useGame() {
  return useContext(GameContext);
};

export function useGameUpdate() {
  return useContext(GameUpdateContext);
};

/*
* Export the Game Provider that will wrap our GameContext and GameUpdateContext together;
* this gives all children access to gameState and updateGame - a function to setGameState
* Define your default and initial state here
*/
export function GameProvider({ children }) {
  const [gameState, setGameState] = useState({
    game: 'liarliar',
    phase: '',
    correctComponent: <p>loading...</p>,
    message: 'message',
    code: 'none'
  });

  function updateGame(updates) {
    setGameState({...gameState, ...updates});
  };

  return (
    <GameContext.Provider value={gameState}>
      <GameUpdateContext.Provider value={updateGame}>
        {children}
      </GameUpdateContext.Provider>
    </GameContext.Provider>
  );
};
