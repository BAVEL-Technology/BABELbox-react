/* Import React, GameProvider, and GameStage from BabelBuilder */
import React from 'react';
import { GameProvider } from "./BabelBuilder/GameContext";
import { GameStage } from "./BabelBuilder/GameStage";

/*
* Import your major components that coorespond to different phases
* LiarLiar would have 3 - Waiting, Question, Answer
* Jeopardy would have 3 - Waiting, Selection, Answer
* Poker would have 3 - Anty, Initial, Trade, Show ? I don't know from poker...
* It is suggested you place these inside a pages folder
*/
import FunctionContextComponent from "./FunctionContextComponent";

/*
* Change the name of your exported function to match your game
* Set all of your sets where your phase matches the component it should render
*/
export default function Jeopardy({ children }) {
  const sets = {
    waiting: <FunctionContextComponent dest="waiting"/>
  };

  return (
      <GameProvider>
        {children}
      </GameProvider>
  );
};
