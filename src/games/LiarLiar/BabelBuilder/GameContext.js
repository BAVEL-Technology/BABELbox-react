/* Import React dependencies */
import React, { useContext, useState, useEffect } from "react";
import babelBellow from "utils/babelBellow";
import { io } from "socket.io-client";
import bb from "utils/babelBread";
import axios from 'axios';

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
    let res = {};
    Object.keys(state).forEach((key) => {
        if (key === "_id") res._id = data._id;
        else if (key === "code") res.code = data.code;
        else 
        {
          res[key] = data.params[key] || state[key];
        }
      });
      return res;
    };

  const initialState = organizeState(portal);
  initialState.currentUser = currentUser;
  const [gameState, setGameState] = useState(initialState);

  function updateGame(updates) {
    setGameState({...gameState, ...updates});
  };

  useEffect(() => {
      // const response = await axios.get(`https://babelboxdb.herokuapp.com/api/portals?code=${portal.code}`);
    //   console.log(typeof response.data[0].params.players[0].id);
    //   console.log(response.data[0].params.players[0].id);
    //   console.log(`We tried this shit ${tries} amount of times...`);
    //   console.log(JSON.stringify(response.data[0].params.players));
    //   // console.log(`Socket Response | Round | `, res);
    //   // const data = JSON.parse(res);
    //   const updatedState = organizeState(response.data[0]);
    //   updateGame(updatedState);
    // })
  
  
    const socket = babelBellow()
    .join(portal._id, (res) => {
      // console.log(`Socket Response | Round | `, res);
      // console.log(`Stringify`, JSON.stringify(res));
      const data = JSON.parse(res);
      const updatedState = organizeState(data);
      updateGame(updatedState);
    });
    // console.log(`React Game State: `, gameState);

  }, []);

  return (
    <GameContext.Provider value={gameState}>
      <GameUpdateContext.Provider value={updateGame}>
        {children}
      </GameUpdateContext.Provider>
    </GameContext.Provider>
  );
};
