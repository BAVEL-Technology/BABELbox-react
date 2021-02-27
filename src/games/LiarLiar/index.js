import React, { Component, useEffect, useState } from "react";
import LiarLiarContext from "./utils/LiarLiarContext";
import LiarLiarStage from "./utils/LiarLiarStage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useParams
} from "react-router-dom";
import HowToPlay from "./HowToPlay";
import bb from "../../utils/babelBread";

function LiarLiar() {
  const [liarLiarState, setLiarLiarState] = useState({
    portalID: "",
    portalPhase: "",
    users: [],
    spectators: [],
    question: "",
    answers: [],
    round: 1,
  });

  // This gets the current path on the browser. Used in nested routing.
  const path = useRouteMatch().path;

  const params = useParams();

  // TODO: Have browser caching for uuid.

  // Use this for reconnecting to the portal.
  // Will be undefined if there is no params on the url.
  console.log(`URL Params: ${params.portalID}`);

  // Hook function for refreshing / performing an action on value changes. Also called once when component mounts.
  useEffect(async () => {
    // Return if portalID is undefined.
    if(!params.portalID) return;
    
    // TODO: Get API data here and set new state when received.
    const bbBackend = await bb().read('portals', {code: params.portalID});
    console.log(bbBackend);
    setLiarLiarState(bbBackend);
  }, []);

  return (
    <>
      {/* Liar Liar state provider context to pass state to any Liar Liar child component. */}
      <LiarLiarContext.Provider value={{liarLiarState, setLiarLiarState}} >
        <Switch>
          {/* Render the How To Play component */}
          <Route path={`${path}/howtoplay`}>
            <>
              <HowToPlay
                title="Liar Liar"
                color="yellow-500"
                description="There are three phases: Question, Answer, and Waiting"
              />
            </>
          </Route>
          
          {/* Liar Liar Game */}
          <Route>
            <LiarLiarStage/>
          </Route>
        </Switch>
      </LiarLiarContext.Provider>
    </>
  );
}

export default LiarLiar;
