/* Import React dependencies */
import React, { useContext, useState } from "react";
import babelBellow from "utils/babelBellow";
import { io } from "socket.io-client";
import bb from "utils/babelBread";

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

  // console.log(portal);

  const organizeState = (data) => {
    let res = {}
    Object.keys(state).forEach((key) => {
        if (key === "_id") res._id = data._id
        else if (key === "code") res.code = data.code
        else 
        {
          res[key] = data.params[key] || state[key]
          // console.log(`Data: `,data);
        }
        
        // console.log(`Organize State Key: ${key}`)
        // console.log(`Organize State Value: `, data.params[key]);
      });
      
      // console.log(`Build Organize State: `, res);

      return res;
    }

  const initialState = organizeState(portal)
  initialState.currentUser = currentUser;
  const [gameState, setGameState] = useState(initialState);

  function updateGame(updates) {
    setGameState({...gameState, ...updates});
  };

  const socket = io('https://babelboxdb.herokuapp.com');
  socket.on('connect', ()=>{
    console.log(`Portal from a prop. | `, portal);
    socket.emit("room", portal._id);
    console.log('Connected');
  })

  socket.on('room updated', async (message) => {
    let data;
    if(message === 'room updated')
    {
      data = await fetch(`https://babelboxdb.herokuapp.com/api/portals?code=${portal.code}`);
      data = await data.json();

      const updatedState = organizeState(data[0]);
      updateGame(updatedState);
      console.log('Data we got back from the db. | ', data);
    }
    // console.log('Room Updated, Updated State: ', updatedState);
    // console.log('Room Updated: ',data);
  });

  // const socket = babelBellow()
  // .join(portal._id, (res) => {
  //   console.log(`Socket Response | Round | `, res);
  //   const data = res[0];
  //   const updatedState = organizeState(data);
  //   updateGame(updatedState);
  // })

  // console.log(`React Game State: `, gameState);

  return (
    <GameContext.Provider value={gameState}>
      <GameUpdateContext.Provider value={updateGame}>
        {children}
      </GameUpdateContext.Provider>
    </GameContext.Provider>
  );
};
