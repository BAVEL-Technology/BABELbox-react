import React from "react";
import CreatePortal from "../../../components/CreatePortal";
import LiarLiarContext from "./LiarLiarContext";
import Gateway from "../../../components/Gateway";
import Waiting from "../Phases/Waiting";

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
