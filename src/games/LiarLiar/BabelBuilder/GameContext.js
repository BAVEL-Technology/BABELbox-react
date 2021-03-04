/* Import React dependencies */
import React, { useContext, useState } from "react";
import babelBellow from "utils/babelBellow";
import { io } from "socket.io-client";

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
export function GameProvider({ children, state, portal, currentUser }) {
  const organizeState = (data) => {
    let res = {}
    Object.keys(state).forEach((key) => {
        console.log(`Game Provider | ${data.params[key]}`);
        if (key == "_id") res._id = data._id
        else if (key == "code") res.code = data.code
        else res[key] = data.params[key] || state[key]
      })

      return res
    }

  const initialState = organizeState(portal)
  initialState.currentUser = currentUser
  const [gameState, setGameState] = useState(initialState);

  console.log(currentUser)

  function updateGame(updates) {
    setGameState({...gameState, ...updates});
  };

  const socket = babelBellow()
  .join(portal._id, (res) => {
    console.log(`Socket | ${res}`);
    const data = res[0]
    const updatedState = organizeState(data)
    updateGame(updatedState)
  })

  console.log(gameState)

  return (
    <GameContext.Provider value={gameState}>
      <GameUpdateContext.Provider value={updateGame}>
        {children}
      </GameUpdateContext.Provider>
    </GameContext.Provider>
  );
};
