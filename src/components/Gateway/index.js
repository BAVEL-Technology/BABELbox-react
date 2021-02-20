import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import HowToPlay from "./HowToPlay";

const Gateway = (props) => {
  // This gets the current path on the browser. Used in nested routing.
  const path = useRouteMatch().path;

  return (
    <Switch>
      {/* Render the How To Play component */}
      <Route path={`${path}/howtoplay`}>
        <HowToPlay />
      </Route>

      <Route>
        <div className="flex flex-col w-full items-center min-h-screen">
          <div className="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4">
            <p
              className={`text-${props.color} lg:text-7xl md:text-7xl text-5xl text-center font-semibold mb-4`}
              style={{ fontFamily: props.font }}
            >
              {props.title}
            </p>
            <p
              id="tag-line"
              className={`lg:text-3xl md:text-3xl text-2xl text-${props.color} text-center mb-4`}
              style={{ fontFamily: "Sniglet" }}
            >
              {props.tagline}
            </p>
          </div>
        </div>
      </Route>
    </Switch>
  );
};

export default Gateway;
