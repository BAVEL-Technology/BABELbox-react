/*
* Import our custom hooks - useGame and useGameUpdate and matchPath for routing
* outside the <Router> from react-router
*/
import React, { useState } from "react";
import { useGame, useGameUpdate } from "./GameContext";
import { matchPath } from "react-router";
import babelBread from "../../../utils/babelBread";
import babelBellow from "../../../utils/babelBellow";

/* Import the HowToPlay Comp and 404 Error Comp. Edit these inside ./HowToPlay and ./Error */
import { HowToPlay } from "../HowToPlay";
import { Error } from "../Error";
import PrePortal from "../Gateway/PrePortal";
import PostPortal from "../Gateway/PostPortal";

/*
* GameStage maps out your sets, and stages the one that matches the current phases.
* If we are at ${path}/howtoplay we show the HowToPlay Comp.
* If we are at ${path}/ we don't match, and we return the Gateway. This is where users
* can create or join portals. Edit the Gateway in ./Gateway/PrePortal or ./Gateway/PostPortal.
* PrePortal is for before a :code is present, and PostPortal is for after a :code is present,
* but a user is not found.
* If we are at ${path}/:code GameStage matches the set with the component.
*/
export function GameStage({ sets, path }) {

  /* Get current phase from the state using custom hook */
  const phase = useGame().phase;

  /* Use matchPath to determine the current path outside <Router> */
  const match = matchPath(window.location.pathname, {
    path: `/${path}/:code`,
    exact: false,
    strict: false
  });

  /* PreGameCheck Function */
  const preGameCheck = async () => {
    try {

      /* If they pass all other pregame checks, connect to the socekt and join the room */
      babelBellow().join(portal._id, (data) => {
        if (typeof data == 'object') {
          useGameUpdate(data);
        } else {
          console.log(data);
        }
      });

      /* Match the current phase with the component to render, or show an error */
      Object.keys(sets).forEach((set) => {
        if (set == phase) {
          console.log('setting to waiting comp');
          useGameUpdate({ correctComponent: sets[set] });
          return;
        } else {
          useGameUpdate({ correctComponent: <Error /> });
          return;
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const code = useGame().code;

  /*
  * If we have a matched path, check if we are in a portal or just HowToPlay,
  * else take us to the preportal gateway.
  * If we are in a portal, go through the preGameCheck and get us to the right component.
  */
  if (match) {
    if (match.params.code === 'howtoplay') {
      return <HowToPlay />;
    } else {
      console.log('happening');
      preGameCheck();
      return correctComponent;
    }
  } else {
    if (phase == 'waiting') {
      return <p>Hi</p>;
    } else {
      return <p>Hi</p>;
    }
  }
};
