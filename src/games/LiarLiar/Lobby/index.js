import React, { Component, useContext } from "react";
import PlayButton from "../PlayButton";
import GameTitle from "../GameTitle";
import BBLogo from "../../../components/BBLogo";
import bb from "../../../utils/babelBread";
import LiarLiarContext from "../utils/LiarLiarContext";

function Lobby(props) {
  const startRound = async (liarLiarState, setLiarLiarState) => {
    console.log(liarLiarState);
    const newRound = await bb().add("rounds", {
      round: liarLiarState.round,
      questionStartTime: Date.now(),
      answerStartTime: Date.now() + 30000,
      portalId: liarLiarState.portalId,
      question: await bb().browse('questions').random()[0]
    });
    console.log(newRound);
    setLiarLiarState(...liarLiarState, {
        portalPhase: 'question',
        round: liarLiarState.round++
      });
  };

  return (
    <LiarLiarContext.Consumer>
      {
        ({ liarLiarState, setLiarLiarState }) => {
          return <div>
            {/* Add small logo at the top of the page. */}
            <BBLogo small={true} />

            <GameTitle
              className="font-bold w-full my-4 flex items-center justify-around text-yellow-600 p-4 lg:text-5xl md:text-5xl text-3xl text-center rounded-xl tracking-widest"
              src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f925.png"
              name="Liar Liar"
            />
            <PlayButton onClick={() => {startRound(liarLiarState, setLiarLiarState);}} />
            {props.children}
          </div>;
        }
      }
    </LiarLiarContext.Consumer>
  );
}

export default Lobby;
