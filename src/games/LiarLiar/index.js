import React, { Component, useEffect, useState } from 'react';
import Lobby from "./Lobby";
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

  useEffect((()=> {
    // TODO: Get API data here and set new state when received. 
  }), []);

  // Functions for updating certain parts of the state.
  function updatePortalID (newID)  {setLiarLiarState({...liarLiarState, newID});}

  function updatePhase (newPhase) {setLiarLiarState({...liarLiarState, newPhase});}

  function updateUsers (newUsers) {setLiarLiarState({...liarLiarState, newUsers});}

  function updateSpectators (newSpectators) {setLiarLiarState({...liarLiarState, newSpectators});}

  function updateQuestion (newQuestion) {setLiarLiarState({...liarLiarState, newQuestion});}

  function updateAnswers (newAnswers) {setLiarLiarState({...liarLiarState, newAnswers});}

  function updateRound (newRound) {setLiarLiarState({...liarLiarState, newRound});}
  
  return (
    <>
      <LiarLiarContext.Provider value={liarLiarState}>
        <Lobby />
      </LiarLiarContext.Provider>
    </>
  );
}

export default LiarLiar;
