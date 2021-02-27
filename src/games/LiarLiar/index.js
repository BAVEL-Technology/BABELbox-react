import React, { Component, useEffect, useState } from "react";
import LiarLiarContext from "./utils/LiarLiarContext";
import LiarLiarStage from "./utils/LiarLiarStage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import HowToPlay from "./HowToPlay";
import bb from "../../utils/babelBread";
import Questions from "./Phases/Questions";
import openSocket from 'socket.io-client';

function LiarLiar() {
  const [liarLiarState, setLiarLiarState] = useState({
    _id: "",
    code: "",
    game: "",
    phase: "",
    players: [],
    rounds:[]
  });
  
// Call back function for the socket reload.
const reload = async () => {
  const fetchPortal = await bb().browse('portals', { code: portalID });
  setLiarLiarState({
    portalID: fetchPortal.code,
    portalPhase: fetchPortal.phase,
    users: fetchPortal.params.players,
    spectators: [],
    answers: [],
    round: fetchPortal.round
  });
};

// Listen for socket and make changes to the state.
const socket = openSocket('https://babelboxdb.herokuapp.com');
socket.on('breadUpdate', reload);

  // This gets the current path on the browser. Used in nested routing.
  const path = useRouteMatch().path;

  const params = useParams();

  // TODO: Have browser caching for uuid.

  // Use this for reconnecting to the portal.
  // Will be undefined if there is no params on the url.
  console.log(`URL Path: ${path}`);
  console.log(`URL Params: ${JSON.stringify(params)}`);

  // Hook function for refreshing / performing an action on value changes. Also called once when component mounts.
  useEffect(async () => {
    // Return if portalID is undefined.
    if (!params.portalID) return;

    // TODO: Get API data here and set new state when received.
    const portalState = await bb().read('portals', {code: params.portalID});
    console.log(`Before SetState: "${liarLiarState.portalPhase}"`);
    console.log(`What we are setting the state to: "${JSON.stringify(portalState)}"`);
    setLiarLiarState(portalState);
    console.log(`After SetState: "${JSON.stringify(liarLiarState)}"`); 
  }, []);

  return (
    <>
      {/* Liar Liar state provider context to pass state to any Liar Liar child component. */}
      <LiarLiarContext.Provider value={{liarLiarState, setLiarLiarState}} >
        {
          params.portalID === "howtoplay"
          ? <HowToPlay
          title="Liar Liar"
          color="yellow-500"
          description="There are three phases: Question, Answer, and Waiting"
        />
        : <LiarLiarStage/>
        }
      </LiarLiarContext.Provider>
    </>
  );
}

export default LiarLiar;
