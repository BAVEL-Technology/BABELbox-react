import React, { useState } from 'react'
import { useNavigation } from 'react-navi'
import babelBread from "utils/babelBread"
import uuid from "utils/uuid"

export default function FindAndJoinPortal({
    game,
    request,
    context,
    color,
    font,
    playerStructure
  }) {
  const [userName, setUserName] = useState(0);
  const [portalName, setPortalName] = useState(0);
  let navigation = useNavigation()

  const join = async () => {
    try {
      const portal = await babelBread()
      .read('portals', { code: portalName })
      .first()

      if (!portal) return

      /* Create a new player based on player structure*/
      const player = {};
      Object.keys(playerStructure).forEach((key) => {
        if (playerStructure[key].input) player[key] = userName
        else if (key == 'leader') player[key] = playerStructure['leader'].default
        else player[key] = playerStructure[key]
      })
      const updates = await babelBread().push("portals",
        { code: portalName },
        { "params.players": player
      });

      console.log(`FindAndJoin: new Player Obj | `, player);
      console.log(`FindAndJoin: join `, updates);

      /* Log the initial user into the newly created portal */
      await context.login({ game, code: portal.code, user: player.id })

      navigation.navigate('/liarliar/'+encodeURIComponent(portalName))
    } catch(err) {
      console.log(err)
    }
  };

  /* Handle the change in the username input */
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  /* Handle the change in the username input */
  const handlePortalChange = (event) => {
    setPortalName(event.target.value.toLowerCase());
  };

  return (
    <>
      <div
        className={`bg-${color} flex flex-col text-gray-100 p-4 md:p-8 rounded-xl tracking-widest my-8 cursor-pointer`}
        style={{ fontFamily: font }}
      >
        <div id="portal-area" className="w-full md:flex justify-center">
          <div className="w-full md:mx-4">
            <div className="status-bar border-b-4 border-blue-400 absolute top-7"></div>
            <label
              htmlFor="portal-name"
              className="duration-300 left-0 top-0 mt-8 w-full-top-10 -z-1 label lg:text-3xl md:text-3xl text-xl"
            >
              Portal name
            </label>
            <input
              onChange={handlePortalChange}
              id="portal-name"
              type="text"
              name="portal-name"
              autocomplete='off'
              spellcheck='false' 
              autocorrect='off'
              placeholder="Portal Name"
              className="block appearance-none focus:outline-none border-b-4 border-gray-100 mb-8 w-full bg-transparent text-xl text-gray-700 rounded-lg px-4 py-3"
            />
          </div>

          <div className="w-full md:mx-4">
            <label
              htmlFor="user-name"
              className="duration-300 left-0 top-4 mt-6 w-full-top-10 z-1 label lg:text-3xl md:text-3xl text-xl"
            >
              Username
            </label>
            <input
              onChange={handleNameChange}
              type="text"
              name="user-name"
              placeholder="Username"
              className="block appearance-none focus:outline-none border-b-4 border-gray-100 mb-8 w-full bg-transparent text-xl text-gray-700 rounded-lg px-4 py-3"
            />
          </div>
        </div>

        <button
          id="join-portal-button"
          onClick={join}
          className="place-self-center my-4 bg-blue-400 h-12 text-gray-100 p-4 rounded-tl-xl rounded-br-xl rounded-tr rounded-bl flex items-center justify lg:w-2/3 md:w-2/3 lg:text-3xl md:text-3xl text-xl border-4 border-blue-400 hover:bg-gray-100 hover:text-blue-400"
        >
          Join Portal
        </button>
      </div>
    </>
  );
};
