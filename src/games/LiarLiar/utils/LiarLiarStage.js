import React from "react";
import LiarLiarContext from "./LiarLiarContext";
import Gateway from "../../../components/Gateway";
// Phases
import Waiting from "../Phases/Waiting";
// import HowToPlay from "../HowToPlay";
import GameButton from "../../../components/GameButton";


// Listen for socket and make changes to the state.
// const socket = io();
// socket.io.connect('https://babelboxdb.herokuapp.com');
// socket.on('breadUpdate', reload);

// Call back function for the socket reload.
function reload() {}

const LiarLiarStage = () => {
  return (
    <LiarLiarContext.Consumer>
      {
        ({ portalPhase }) => {
          switch (portalPhase) {
            case 'waiting':
              return(<Waiting />);
            case 'question':
              return(<p>question</p>);
            case 'answer':
              return(<p>answer</p>);
            default:
              return (
              <>
                <Gateway
                  color="yellow-500"
                  tagline="The game where knowing the right answer is only half the challenge."
                  title="Liar Liar"
                  font="Sniglet"
                >
                  {/* How to play button */}
                  <GameButton classes="bg-blue-400 h-12 text-gray-100 rounded-tl-xl rounded-br-xl rounded-tr rounded-bl w-full text-3xl border-4 border-blue-400 hover:bg-gray-100 hover:text-blue-400" location="/liarliar/howtoplay" emoji="#" name="How To Play"/>
                </Gateway>
              </>
              );
          };
        }
      }
    </LiarLiarContext.Consumer>
  );
};

export default LiarLiarStage;
