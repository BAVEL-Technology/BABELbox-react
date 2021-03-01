import * as React from "react";
import { create, read, update, add, remove, clear, drop } from "./utils/localDB";
import { useBabel, useUpdateBabel, useBabelAuth } from './BabelContext';
import { BabelProvider } from "./BabelContext";
import Login from "./Gateway/Login";
import PortalRoute from "./PortalRoute";
import Jeopardy from "./games/Jeopardy";
import { useGame, useGameUpdate } from './games/Jeopardy/BabelBuilder/GameContext';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory,
  useParams
} from "react-router-dom";

function AuthButton() {
  const gameState = useGame()
  const history = useHistory();
  const updateBabelState = useUpdateBabel()
  const babelAuth = useBabelAuth()
  const signout = () => {
    babelAuth.signout(game, () => history.push("/liarliar"));
  }
  const isAuthenticated = useBabelAuth().isAuthenticated('liarliar').length > 0 ? true : false
  console.log(useParams().code || gameState.code)
  const response = useBabelAuth()
  .portalExists(gameState.game, useParams().code || gameState.code).response
  if (!response) {
    return <p>loading...</p>
  }
  const portalExists = Array.isArray(response) ? false : true
  console.log(response, isAuthenticated)
  if (isAuthenticated && portalExists) {
    return <p>
      Welcome! You are in the portal{" "}
      <button
        onClick={signout}
      >
        Sign out
      </button>
    </p>
  } else {
    return <p>You are not logged in.</p>
  }
}

export default function App() {
  return (
    <BabelProvider>
      <Router>
        <div>
          <p>Bitches</p>
          <Route exact path="/">
            <p>This is the main page</p>
          </Route>
          <Jeopardy>
            <AuthButton />
            <Route exact path="/liarliar">
              <Login />
            </Route>
            <Route exact path="/liarliar/how/to/play">
              <p>How to Play</p>
            </Route>
            <Route exact path="/liarliar/:code/join">
              <p>Join this portal</p>
            </Route>
            <PortalRoute exact path="/liarliar/:code" game="liarliar" onPortalNotFound="/liarliar" onUserNotFound="/liarliar/:code/join">
              <p>Dont look at me</p>
            </PortalRoute>
          </Jeopardy>
        </div>
      </Router>
    </BabelProvider>
  );
}
