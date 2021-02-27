import React, { useEffect, useState } from "react";
import LiarLiarContext from "./utils/LiarLiarContext";
import LiarLiarStage from "./utils/LiarLiarStage";
import {
  useRouteMatch,
  useParams,
} from "react-router-dom";
import HowToPlay from "./HowToPlay";
import bb from "../../utils/babelBread";
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

  console.log("State was just initialized.");
/*
// Call back function for the socket reload.
const reload = async () => {
  // console.log(liarLiarState);
  const portal = await bb().read('portals', { code: liarLiarState.code });
  if (liarLiarState.code) {
    // console.log(portal[0]);
    setLiarLiarState({
      _id: portal[0]._id,
      code: portal[0].code,
      game: portal[0].params.game,
      phase: portal[0].params.phase,
      players: portal[0].params.players,
      rounds: portal[0].params.rounds
    });

    console.log(liarLiarState);
  }
};

// Listen for socket and make changes to the state.
const socket = openSocket('https://babelboxdb.herokuapp.com');
socket.on('breadUpdate', (data) => {
  console.log('bread updated');
});
socket.on('connect', function() {

  console.log(`State Reference: Sockets.`);

  try{
    if (liarLiarState._id) {
      // console.log('joining room ' + liarLiarState._id);
      socket.emit('room', liarLiarState._id);
    }
  }
  catch (e)
  {
    console.warn(e);
  }
});

socket.on('message', function(data) {
    // console.log('Incoming message:', data);
});

*/

  // This gets the current path on the browser. Used in nested routing.
  // const path = useRouteMatch().path;
  const params = useParams();

  // TODO: Have browser caching for uuid.

  // Use this for reconnecting to the portal.
  // Will be undefined if there is no params on the url.
  // console.log(`URL Path: ${path}`);
  console.log(`URL Params: ${JSON.stringify(params)}`);

  // Hook function for refreshing / performing an action on value changes. Also called once when component mounts.
  useEffect(async () => {
    console.log("IndexJS UseEffect()");
    // Return if portalID is undefined.
    if (!params.portalID) return;

    // TODO: Get API data here and set new state when received.
    const portalState = await bb().read('portals', {code: params.portalID});

    if(portalState != undefined && portalState.length  > 0) 
    {
      console.log("Portal State: \n" + JSON.stringify(portalState, null, 2));
      
      console.log(portalState[0]);
      const newState = {
        _id: portalState[0]._id,
        code: portalState[0].code,
        game: portalState[0].params.game,
        phase: portalState[0].params.phase,
        players: portalState[0].params.players,
        rounds: portalState[0].params.rounds
      };
      console.log("New State", newState);
      setLiarLiarState(newState);
    }    
    else
    {
      console.log("Portal State: \n" + JSON.stringify(portalState, null, 2));
      console.warn("Portal was returned as undefined or empty."); 
      return;
    }
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
