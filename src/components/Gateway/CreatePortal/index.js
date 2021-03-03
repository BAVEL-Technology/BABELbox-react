import React, { useContext, useState } from "react";
import "./style.css";
import BB from "../../../utils/babelBread";
import LiarLiarContext from "../../../games/LiarLiar/utils/LiarLiarContext";
import uuid from "../../../utils/uuid";
import { useNavigation } from 'react-navi'
import { authService } from "../../../utils/authService"

const CreatePortal = (props) => {
  // Use the Liar Liar state context.
  const context = useContext(LiarLiarContext);
  
  // State for username input.
  const [userName, setUserName] = useState(0);

  // Reference for navigation routing.
  let navigation = useNavigation()

  // Main Create Portal function.
  const createPortal = async () => {
    const player = {
      id: uuid(),
      name: userName,
      leader: true,
      avatar: getAvatar(),
      points: 0,
      answerLock: false,
    };

    // Add the game and player to the local storage
    localStorage.setItem("liarLiarPlayer", player.id);

    // Call the backend and add a new portal with the host added already. This returns the portal we created.
    const portal = await BB().add("portals", {
      params: {
        game: "LiarLiar",
        phase: "waiting",
        players: [player],
        rounds: [],
      },
    });

    // Set the new liar liar state to be what we got back from the database.
    context.setLiarLiarState({
      _id: portal._id,
      code: portal.code,
      game: portal.params.game,
      phase: portal.params.phase,
      players: portal.params.players,
      rounds: portal.params.rounds,
    });

    // 
    authService.login('liarliar', portal.code, player.id);
    
    // Navigate to the portal page and make sure it is formatted as a correct URL.
    navigation.navigate('/liarliar/' + encodeURIComponent(portal.code));
  };

  // Gets a random avatar to assign to the player.
  const getAvatar = () => {
    const avatars = ["🐵", "🦊", "🐨", "🐲", "🥸", "🤓", "🤖", "👺", "🤡"];
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

  // Updates the local state for the username when the input is changed.
  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div
      className={`bg-${props.color} text-gray-100 p-8 rounded-xl tracking-widest my-8 cursor-pointer py-8 w-2/3 flex flex-col`}
      style={{ fontFamily: props.font }}
    >
      <div
        id="user-area"
        className="w-full flex justify-center mt-8"
        style={{ fontFamily: props.font }}
      >
        <div className="w-full">
          <label
            htmlFor="user-name"
            className="duration-300 mb-6 w-full-top-10 label lg:text-3xl md:text-3xl text-xl"
          >
            Username
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="user-name"
            placeholder="Username"
            className="block appearance-none focus:outline-none border-b-4 border-gray-100 mb-8 w-full bg-transparent text-xl text-gray-700 rounded-lg px-4 py-3"
          />
        </div>
      </div>

      <button
        id="create-user-button"
        onClick={createPortal}
        className="place-self-center my-4 bg-blue-400 h-12 text-gray-100 p-4 rounded-tl-xl rounded-br-xl rounded-tr rounded-bl flex items-center justify lg:w-2/3 md:w-2/3 lg:text-3xl md:text-3xl text-xl border-4 border-blue-400 hover:bg-gray-100 hover:text-blue-400"
        style={{ fontFamily: props.font }}
      >
        Create Portal
      </button>
    </div>
  );
};

export default CreatePortal;
