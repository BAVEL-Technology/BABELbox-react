/* Import React, GameProvider, and GameStage from BabelBuilder */
import { useCurrentRoute } from 'react-navi';
import { GameProvider } from "./BabelBuilder/GameContext";
import { GameStage } from "./BabelBuilder/GameStage";
import Chat from "components/Chat";

/* Import your sets and your state structure from the config file */
import { state, sets } from "./game.config.js";

/*
* Change the name of your exported function to match your game
* Set all of your sets where your phase matches the component it should render
*/
export default function LiarLiar({ request, context }) {
  const data = useCurrentRoute().data

  return (
      <GameProvider state={state} portal={data.portal} currentUser={data.currentUser}>
        <GameStage sets={sets} />
      </GameProvider>
  );
};
