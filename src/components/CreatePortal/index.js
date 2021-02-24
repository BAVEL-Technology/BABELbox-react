import React from "react";
import { useState, setState } from "react";
import LiarLiar from "../../games/LiarLiar";
import BB from "../../utils/babelBread";
import LiarLiarContext from "../../games/LiarLiar/utils/LiarLiarContext";

const CreateProtal = (props) => {
  const getAvatar = () => {
    const avatars = [
      "🐵",
      "🦊",
      "🐨",
      "🐲",
      "🥸",
      "🤓",
      "🤖",
      "👺",
      "🤡"
    ];
    return avatars[Math.floor(Math.random() * avatars.length)];
  };
  const [userName, setUserName] = useState(0);
  const createPortal = async (setLiarLiarState) => {
    const portal = await BB().add("portals", {
      params: { game: "LiarLiar", phase: "waiting", round: "1", players: [{
        name: userName,
        avatar: getAvatar()
      }] },
    });
    setLiarLiarState({
      portalID: portal.code,
      portalPhase: portal.params.phase,
      users: BB().where({type: 'player'}, portal.params.players),
      spectators: BB().where({type: 'spectator'}, portal.params.players),
      question: "",
      answers: [],
      round: portal.params.round,
    });
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <LiarLiarContext.Consumer>
      <div
        className={`bg-${props.color} w-full flex flex-col text-gray-100 p-8 rounded-xl tracking-widest my-8 cursor-pointer`}
        style={{ fontFamily: props.font }}
      >
        <div
          id="user-area"
          className="w-full flex justify-center mt-8"
          style={{ fontFamily: props.font }}
        >
          <div className="w-full mx-6 relative">
            <input
              onChange={handleChange}
              type="text"
              name="user-name"
              placeholder=" "
              className="block
                appearance-none focus:outline-none border-b-4 border-gray-100 w-full bg-transparent
                text-xl text-gray-100"
            />
            <label
              htmlFor="user-name"
              className="duration-300 absolute left-0 top-0 mt-8 w-full
                    -top-10 -z-1 label lg:text-3xl md:text-3xl text-xl"
            >
            User name
            </label>
          </div>
        </div>
      </div>
      <button
        id="create-user-button"
        onClick={ () => createPortal(setLiarLiarState) }
        className="place-self-center
  my-4 bg-blue-400 h-12 text-gray-100 p-4 rounded-tl-xl rounded-br-xl rounded-tr
  rounded-bl flex items-center justify-center w-full lg:w-2/3 md:w-2/3 lg:text-3xl md:text-3xl text-xl border-4 border-blue-400
  hover:bg-gray-100 hover:text-blue-400"
        style={{ fontFamily: props.font }}
      >
        Create Portal
      </button>
    </LiarLiarContext.Consumer>
  );
};

export default CreateProtal;
