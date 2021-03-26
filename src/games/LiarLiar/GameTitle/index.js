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
    <div className={`${props.className}`}>
      <BBLogo small={true} className="text-7xl" />
      <p 
      onClick={() => {
          window.location='/liarliar'
        }}
      className="cursor-pointer font-extrabold game-button-p">{props.name}
      </p>
      
      <Twemoji 
      className="cursor-pointer"
      onClick={() => {
        window.location='/liarliar'
      }} 
      options={{ className: "twemoji" }}>🤥 
      </Twemoji>
      {/* <Scoreboard hidden={!scoreOpen} users={gameState.players} /> */}
    </div>
  );
};

export default GameTitle;
