
import React, { Component, useEffect, useState } from 'react';
import Lobby from "./Lobby";
import Gateway from "../../components/Gateway";
import LiarLiarContext from './utils/LiarLiarContext';

function LiarLiar () {
  const [liarLiarState, setLiarLiarState] = useState({
    portalID: "",
    portalPhase: "",
    users: [],
    spectators: [],
    question: "",
    answers: [],
    round: 1
  });

  // Hook function for refreshing / performing an action on value changes. Also called once when component mounts.
  useEffect((()=> {
    // TODO: Get API data here and set new state when received. 
  }), []);

  // Functions for updating certain parts of the state.
  function updatePortalID   (portalID)    {setLiarLiarState({...liarLiarState, portalID});}
  function updatePhase      (portalPhase) {setLiarLiarState({...liarLiarState, portalPhase});}
  function updateUsers      (users)       {setLiarLiarState({...liarLiarState, users});}
  function updateSpectators (spectators)  {setLiarLiarState({...liarLiarState, spectators});}
  function updateQuestion   (question)    {setLiarLiarState({...liarLiarState, question});}
  function updateAnswers    (answers)     {setLiarLiarState({...liarLiarState, answers});}
  function updateRound      (round)       {setLiarLiarState({...liarLiarState, round});}
  
  return (
    <>
      {/* Liar Liar state provider context to pass state to any Liar Liar child component. */}
      <LiarLiarContext.Provider value={liarLiarState}>
        <Gateway color="yellow-500" tagline="The game where knowing the right answer is only half the challenge." title="Liar Liar" font="Sniglet"/>
        
        
      </LiarLiarContext.Provider>
    </>
  );
}

export default LiarLiar;
