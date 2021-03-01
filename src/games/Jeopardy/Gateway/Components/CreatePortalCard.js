import React, { useState } from "react";
import { useGame, useGameUpdate } from "../../BabelBuilder/GameContext";
import uuid from "../../../../utils/uuid";
import babelBread from "../../../../utils/babelBread";

export default function CreatePortalCard({ path }) {
  const getAvatar = () => {
    const avatars = ["🐵", "🦊", "🐨", "🐲", "🥸", "🤓", "🤖", "👺", "🤡"];
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

  const [userName, setUserName] = useState('');

  const updateGame = useGameUpdate();

  const createPortal = async () => {
    const player = {
      id: uuid(),
      name: userName,
      leader: true,
      avatar: getAvatar(),
      points: 0,
      answerLock: false,
    };

    localStorage.setItem(`${path}User`, player.id);

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

    redirect(portal.code, path);
  };

  const redirect = (code, game) => {
    window.history.replaceState(null, "Babelbox", `${game}/${code}`);
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <div
        className={`bg-green-500 w-2/3 flex flex-col text-gray-100 p-8 rounded-xl tracking-widest my-8 cursor-pointer`}
        style={{ fontFamily: "'Sniglet', cursive" }}
      >
        <div
          id="user-area"
          className="w-full flex justify-center mt-8"
          style={{ fontFamily: "'Sniglet', cursive" }}
        >
          <div className="w-full mx-6 h-12 relative">
            <input
              onChange={handleChange}
              type="text"
              name="user-name"
              placeholder=" "
              className="block appearance-none focus:outline-none border-b-4 border-gray-100 -mt-8 w-full bg-transparent text-xl text-gray-700 rounded-lg px-4 py-3"
            />
            <label
              htmlFor="user-name"
              className="duration-300 absolute left-0 top-4 mt-6 w-full-top-10 z-1 label lg:text-3xl md:text-3xl text-xl"
            >
              User name
            </label>
          </div>
        </div>
      </div>
      <button
        id="create-user-button"
        onClick={createPortal}
        className="place-self-center my-4 bg-blue-400 h-12 text-gray-100 p-4 rounded-tl-xl rounded-br-xl rounded-tr rounded-bl flex items-center justify-center w-full lg:w-2/3 md:w-2/3 lg:text-3xl md:text-3xl text-xl border-4 border-blue-400 hover:bg-gray-100 hover:text-blue-400"
        style={{ fontFamily: "'Sniglet', cursive" }}
      >
        Create Portal
      </button>
    </>
  );
};
