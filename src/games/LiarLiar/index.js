import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
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

  const path = useRouteMatch().path;

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
          <Switch>
            {/* Render the How To Play component */}
            <Route path={`${path}/how-to-play`}>
              {/* TODO: Render How to Play component. */}
            </Route>
            {/* Render the Gateway component */}
            <Route>
              {/* TODO: Render the Gateway component */}
            </Route>
          </Switch>
      </LiarLiarContext.Provider>
    </>
  );
}

export default LiarLiar;
