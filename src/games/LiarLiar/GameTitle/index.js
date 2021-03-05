import { render } from "@testing-library/react";
import React, { useState } from "react";
import Scoreboard from "../Scoreboard";
import { useGame } from "games/LiarLiar/BabelBuilder/GameContext";
const gameTitle = (props) => {
  const [scoreOpen, setScoreOpen] = useState(false);
  const gameState = useGame();
  // console.log(this.props);
  return (
    <button
      className={`${props.className}`}
      onClick={() => {
        setScoreOpen(!scoreOpen);
        console.log("score open ", scoreOpen);
      }}
    >
      <div className={`emoji`}>🤥</div>
      <p className="font-extrabold game-button-p ml-5">{props.name}</p>
      <Scoreboard hidden={!scoreOpen} users={gameState.players} />
    </button>
  );
};

export default gameTitle;
