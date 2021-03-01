import React, { useContext } from 'react';
import { useGame, useGameUpdate } from './BabelBuilder/GameContext';
import babelBread from "../../utils/babelBread";

export default function FunctionContextComponent(props) {
  const updateGame = useGameUpdate();

  const createPortal = async () => {
    const player = {
      id: 44,
      name: 'Nick',
      leader: true,
      avatar: '🐛',
      points: 0,
      answerLock: false,
    };

    localStorage.setItem(`User`, player.id);

    const portal = await babelBread().add("portals", {
      params: {
        game: "LiarLiar",
        phase: "question",
        players: [player],
        rounds: [],
      },
    });

    updateGame({
      _id: portal._id,
      code: portal.code,
      game: portal.params.game,
      phase: portal.params.phase,
      players: portal.params.players,
      rounds:portal.params.rounds
    });
  };

  const darkTheme = false;

  const message = useGame().code;

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333'
  };

  return (
    <>
      <button onClick={createPortal}>Toggle Theme</button>
      <div style={themeStyles}>{message} {props.dest} {props.code}</div>
    </>
  );
};
