import React, { Component, useEffect, useState } from "react";
import LiarLiarContext from "./utils/LiarLiarContext";
import LiarLiarStage from "./utils/LiarLiarStage";
import Gateway from "../../components/Gateway";
import Waiting from "./Phases/Waiting";
import CreatePortal from "../../components/CreatePortal";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import HowToPlay from "./HowToPlay";

function LiarLiar() {
  const [liarLiarState, setLiarLiarState] = useState({
    portalID: "",
    portalPhase: "",
    users: [],
    spectators: [],
    question: "",
    answers: [],
    round: 1,
    setLiarLiarState: () => {},
  });

  // Assign the set state to the state variable.
  liarLiarState.setLiarLiarState = setLiarLiarState;

  // Hook function for refreshing / performing an action on value changes. Also called once when component mounts.
  useEffect(() => {
    // TODO: Get API data here and set new state when received.
  }, []);

  // This gets the current path on the browser. Used in nested routing.
  const path = useRouteMatch().path;

  return (
    <>
      {/* Liar Liar state provider context to pass state to any Liar Liar child component. */}
      <LiarLiarContext.Provider value={liarLiarState}>
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
          <LiarLiarStage />
          <Route></Route>
        </Switch>
      </LiarLiarContext.Provider>
    </>
  );
}

export default LiarLiar;
