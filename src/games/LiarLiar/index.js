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
  function updatePortalID (portalID)  {setLiarLiarState({...liarLiarState, portalID});}

  function updatePhase (portalPhase) {setLiarLiarState({...liarLiarState, portalPhase});}

  function updateUsers (users) {setLiarLiarState({...liarLiarState, users});}

  function updateSpectators (spectators) {setLiarLiarState({...liarLiarState, spectators});}

  function updateQuestion (question) {setLiarLiarState({...liarLiarState, question});}

  function updateAnswers (answers) {setLiarLiarState({...liarLiarState, answers});}

  function updateRound (round) {setLiarLiarState({...liarLiarState, round});}
  
  return (
    <>
      <LiarLiarContext.Provider value={liarLiarState}>
        <Lobby />
      </LiarLiarContext.Provider>
    </>
  );
}

export default LiarLiar;
