import { render } from "@testing-library/react";
import React, { useState } from "react";
import Scoreboard from "../Scoreboard";
import { useGame } from "games/LiarLiar/BabelBuilder/GameContext";
import Twemoji from "react-twemoji";
import BBLogo from "components/BBLogo";

const GameTitle = (props) => {
  const [scoreOpen, setScoreOpen] = useState(false);
  const gameState = useGame();
  // console.log(this.props);
  return (
    <>
    <button
      className={`${props.className}`}
      onClick={() => {
        setScoreOpen(!scoreOpen);
        console.log("score open ", scoreOpen);
      }}
    >
      <BBLogo small={true} className="text-7xl"/>
      <p className="font-extrabold game-button-p">{props.name}</p>
      <Twemoji options={{ className: "twemoji" }}>🤥 </Twemoji>
    </button>
    {/* <Scoreboard hidden={!scoreOpen} users={gameState.players} /> */}
    </>
  );
};

export default GameTitle;
