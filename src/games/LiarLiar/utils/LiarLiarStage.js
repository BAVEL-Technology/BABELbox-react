import React from "react";
import CreatePortal from "../../../components/CreatePortal";
import LiarLiarContext from "./LiarLiarContext";
import Gateway from "../../../components/Gateway";
// Phases
import Waiting from "../Phases/Waiting";

// Listen for socket and make changes to the state.
const socket = io();
socket.io.connect('https://babelboxdb.herokuapp.com');
socket.on('breadUpdate', reload);

// Call back function for the socket reload.
function reload() {

}


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
              return (<Gateway
                color="yellow-500"
                tagline="The game where knowing the right answer is only half the challenge."
                title="Liar Liar"
                font="Sniglet"
              />);
          };
        }
      }
    </LiarLiarContext.Consumer>
  );
};

export default LiarLiarStage;
