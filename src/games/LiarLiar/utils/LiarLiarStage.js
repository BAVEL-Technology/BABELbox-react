import React, { useEffect } from "react";
import LiarLiarContext from "./LiarLiarContext";
import BBLogo from "../../../components/BBLogo";
import Gateway from "../../../components/Gateway";
// Phases
import Waiting from "../Phases/Waiting";
import GameButton from "../../../components/GameButton";
import Questions from "../Phases/Questions";

const LiarLiarStage = () => {
  return (
    <LiarLiarContext.Consumer>
      {
        ({ liarLiarState, setLiarLiarState }) =>
        {
          try
          {
            if(!liarLiarState.code)
            {
              return (
                // Show the gateway for connecting to portals
                <>
                  <BBLogo className="py-4 mx-8" small={true} />
                  <Gateway
                    color="yellow-500"
                    tagline="The game where knowing the right answer is only half the challenge."
                    title="Liar Liar"
                    font="Sniglet"
                  >
                    {/* How to play button */}
                    <GameButton
                      className="bg-blue-400 h-12 text-gray-100 rounded-tl-xl rounded-br-xl rounded-tr rounded-bl w-full text-3xl border-4 border-blue-400 hover:bg-gray-100 hover:text-blue-400"
                      location="/liarliar/howtoplay"
                      emoji="#"
                      name="How To Play"
                    />
                  </Gateway>
                </>
              );
            }
            else
            {
              switch (liarLiarState.phase)
              {
                case 'waiting':
                  return(
                    <div className="flex flex-col mx-auto items-start justify-center max-w-2xl min-h-screen px-8 md:px-0 lg:px-0">
                      <Waiting />
                    </div>
                  );
                case 'question':
                  return(<Questions />);
                case 'answer':
                  return(<p>answer</p>);
                default:
                  // TODO: Make Loading Page.
                  return(
                  <p className="h-screen w-screen text-center text-6xl">LOADING!</p>
                  );
              }
            }
          } catch (e) {
            console.log("State undefined. " + e);
          }
        }
      }
    </LiarLiarContext.Consumer>
  );
};

export default LiarLiarStage;
