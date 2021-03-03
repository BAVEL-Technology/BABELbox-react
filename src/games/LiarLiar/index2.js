/* Import React, GameProvider, and GameStage from BabelBuilder */
import { useCurrentRoute } from 'react-navi';
import { GameProvider } from "./BabelBuilder/GameContext";
import { GameStage } from "./BabelBuilder/GameStage";
import Wrapper from "components/Wrapper";
/*
* Import your major components that coorespond to different phases
* LiarLiar would have 3 - Waiting, Question, Answer
* Jeopardy would have 3 - Waiting, Selection, Answer
* Poker would have 3 - Anty, Initial, Trade, Show ? I don't know from poker...
* It is suggested you place these inside a pages folder
*/

/*
* Change the name of your exported function to match your game
* Set all of your sets where your phase matches the component it should render
*/
export default function LiarLiar({ request, context }) {
  const portal = useCurrentRoute().data

  const sets = {
    waiting: <p>Waiting</p>,
    question: <p>Question</p>,
    answer: <p>Answer</p>
  };

  const state = {
    _id: null,
    code: null,
    game: null,
    phase: null,
    players: null,
    rounds: []
  }

  return (
      <GameProvider state={state} portal={portal}>
        <GameStage sets={sets} />
      </GameProvider>
  );
};
