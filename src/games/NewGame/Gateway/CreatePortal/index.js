/* Import React, Navi, and utilities */
import React, { useState } from 'react'
import { useNavigation } from 'react-navi'
import babelBread from "utils/babelBread"
import uuid from "utils/uuid"

export default function CreatePortal({
    game,
    request,
    context,
    color,
    font,
    playerStructure,
    portalStructure
  }) {
  /* State for User Input and Navigation Hook for Navi */
  const [userName, setUserName] = useState(0);
  let navigation = useNavigation()

  /* Create Portal Function */
  const createPortal = async () => {
    /*
    * Create the portals initial player
    * based on player structure defined in config
    */
    const player = {};
    Object.keys(playerStructure).forEach((key) => {
      if (playerStructure[key].input) player[key] = userName
      else if (playerStructure[key].initial) player[key] = playerStructure[key].initial
      else player[key] = playerStructure[key]
    })

    /* Create the portal based on the portal structure defined in config */
    const portalParams = {}
    Object.keys(portalStructure).forEach((key) => {
      if (key == 'players') portalParams.players = [player]
      else portalParams[key] = portalStructure[key]
    })
    const portal = await babelBread().add("portals", {
      params: portalParams
    });

    /* Log the initial user into the newly created portal */
    await context.login({ game, code: portal.code, user: player.id })

    /* Navigate the user to the newly created portal */
    navigation.navigate('/' + game + '/' + encodeURIComponent(portal.code))
  }

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
    </div>
  );
}
