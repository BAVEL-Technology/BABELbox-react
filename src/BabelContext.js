/* Import React, useContext, and useState from react */
import React, { useContext, useState } from "react";
import { create, read, update, add, remove, clear, drop } from "./utils/localDB";
import babelBread from "./utils/babelBread";

/* Create a context to hold state and context to update state */
const BabelContext = React.createContext();
const BabelUpdateContext = React.createContext();
const BabelAuthContext = React.createContext();

/* Export two custom hooks to view state and update state */
export function useBabel() {
  return useContext(BabelContext);
};

export function useUpdateBabel() {
  return useContext(BabelUpdateContext);
};

export function useBabelAuth() {
  return useContext(BabelAuthContext);
};

/*
* Export the Game Provider that will wrap our GameContext and GameUpdateContext together;
* this gives all children access to gameState and updateGame - a function to setGameState
* Define your default and initial state here
*/
export function BabelProvider({ children }) {
  const [babelState, setBabelState] = useState({
    users: read('gamePlayers'),
    code: ''
  });

  function updateBabel(updates) {
    setBabelState({...babelState, ...updates});
  };

  const fakeAuth = {
      isAuthenticated(game) {
        return babelState.users.filter((user) => user.game == game)
      },
    portalExists(game, code) {
        const [response, setResponse] = React.useState(null);
        const [error, setError] = React.useState(null);

        React.useEffect(() => {
          const fetchData = async () => {
            try {
              const res = await babelBread().read('portals', { code }).first()
              console.log(code)
              setResponse(res);
            } catch (error) {
              setError(error);
            }
          };
          fetchData();
        }, [babelState]);
        return { response, error };
      },
    authenticate(game, id, cb) {
      if (read('gamePlayers', {game})) {
        read('gamePlayers', {game}).forEach((player) => {
          remove('gamePlayers', { uuid: player.uuid })
        })
      }
      create('gamePlayers', {game, user: id})
      updateBabel({ users: read('gamePlayers') })
      setTimeout(cb, 100); // fake async
    },
    signout(game, cb) {
      if (read('gamePlayers', {game})) {
        read('gamePlayers', {game}).forEach((player) => {
          remove('gamePlayers', { uuid: player.uuid })
        })
      }
      updateBabel({ users: read('gamePlayers') })
      setTimeout(cb, 100); // fake async
    }
  };

  return (
    <BabelContext.Provider value={babelState}>
      <BabelUpdateContext.Provider value={updateBabel}>
        <BabelAuthContext.Provider value={fakeAuth}>
          {children}
        </BabelAuthContext.Provider>
      </BabelUpdateContext.Provider>
    </BabelContext.Provider>
  );
};
