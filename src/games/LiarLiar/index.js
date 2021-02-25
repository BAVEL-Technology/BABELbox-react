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
import HowToPlay from "../../components/Gateway/HowToPlay";

function LiarLiar() {
  const [liarLiarState, setLiarLiarState] = useState({
    portalID: "",
    portalPhase: "",
    users: [],
    spectators: [],
    question: "",
    answers: [],
    round: 1,
    setLiarLiarState: () => {}
  });

  liarLiarState.setLiarLiarState = setLiarLiarState;

  // Hook function for refreshing / performing an action on value changes. Also called once when component mounts.
  useEffect(() => {
    // TODO: Get API data here and set new state when received.
  }, []);

  // Functions for updating certain parts of the state.
  function updatePortalID(portalID) {
    setLiarLiarState({ ...liarLiarState, portalID });
  }
  function updatePhase(portalPhase) {
    setLiarLiarState({ ...liarLiarState, portalPhase });
  }
  function updateUsers(users) {
    setLiarLiarState({ ...liarLiarState, users });
  }
  function updateSpectators(spectators) {
    setLiarLiarState({ ...liarLiarState, spectators });
  }
  function updateQuestion(question) {
    setLiarLiarState({ ...liarLiarState, question });
  }
  function updateAnswers(answers) {
    setLiarLiarState({ ...liarLiarState, answers });
  }
  function updateRound(round) {
    setLiarLiarState({ ...liarLiarState, round });
  }

  // This gets the current path on the browser. Used in nested routing.
  const path = useRouteMatch().path;

  return (
    <>
      {/* Liar Liar state provider context to pass state to any Liar Liar child component. */}
      <LiarLiarContext.Provider value={liarLiarState}>
        <Switch>
          {/* Render the How To Play component */}
          <Route path={`${path}/howtoplay`}>
            <HowToPlay
              title="Liar Liar"
              color="yellow-500"
              description="There are three phases: Question, Answer, and Waiting"
              type="Question Phase:"
              rule="You'll be given a piece of trivia with a missing word. Fill in the blank with the most convincing thing you can think of. The more people that guess your answer, the more points you get!"
            />
          </Route>
            <LiarLiarStage />
          <Route>
          </Route>
        </Switch>
      </LiarLiarContext.Provider>
    </>
  );
}

export default LiarLiar;
