/* Import React, Navi, and utilities */
import React, { useState } from "react";
import { useNavigation } from "react-navi";
import babelBread from "utils/babelBread";
import uuid from "utils/uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreatePortal({
  game,
  request,
  context,
  color,
  font,
  playerStructure,
  portalStructure,
}) {
  /* State for User Input and Navigation Hook for Navi */
  const [userName, setUserName] = useState(0);
  let navigation = useNavigation();

  /* Create Portal Function */
  const createPortal = async () => {
    if (userName == false) {
      toast("You did not create a username! Create username to make a portal!");
      return;
    }

    /* Create a new player based on player structure*/
    const player = {};
    Object.keys(playerStructure).forEach((key) => {
      if (playerStructure[key].input) player[key] = userName;
      else if (key == "leader")
        player[key] = playerStructure["leader"].default;
      else player[key] = playerStructure[key];
    });
    const updates = await babelBread().push(
      "portals",
      { code: request.params.code },
      { "params.players": player }
    );

    console.log(`FindAndJoin: new Player Obj | `, player);
    console.log(`FindAndJoin: join `, updates);

    /* Log the initial user into the newly created portal */
    await context.login({ game, code: request.params.code, user: player.id });

    navigation.navigate("/liarliar/" + encodeURIComponent(request.params.code));
  };

  /* Handle the change in the username input */
  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div
      className={`bg-${color} text-gray-100 p-8 rounded-xl tracking-widest my-8 cursor-pointer py-8 flex flex-col`}
      style={{ fontFamily: font }}
    >
      <div
        id="user-area"
        className="w-full flex justify-center mt-8"
        style={{ fontFamily: font }}
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
            onKeyPress={(event) =>
              event.key === "Enter" ? createPortal(event) : null
            }
          />
        </div>
      </div>

      <button
        id="create-user-button"
        onClick={createPortal}
        className="place-self-center my-4 bg-blue-400 h-12 text-gray-100 p-4 rounded-tl-xl rounded-br-xl rounded-tr rounded-bl flex items-center justify lg:w-2/3 md:w-2/3 lg:text-3xl md:text-3xl text-xl border-4 border-blue-400 hover:bg-gray-100 hover:text-blue-400"
        style={{ fontFamily: font }}
      >
        Create Portal
      </button>
      <ToastContainer />
    </div>
  );
}
