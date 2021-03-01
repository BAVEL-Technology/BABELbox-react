import React, { useState } from "react";
import uuid from "../utils/uuid";
import babelBread from "../utils/babelBread";
import { useBabel, useUpdateBabel, useBabelAuth } from '../BabelContext';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory
} from "react-router-dom";

export default function Login() {
    /* Set up local state variables - for this function only */
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const [userName, setUserName] = useState('');

    /* extract the state from the Route that directed us here */
    const { state } = useLocation();

    /* Pull in custom hoks for updateing the babel state and accessing babel auth */
    const updateBabelState = useUpdateBabel()
    const babelAuth = useBabelAuth()

    /* Quick function to generate an Avatar - this should not be here? too specific? */
    const getAvatar = () => {
      const avatars = ["🐵", "🦊", "🐨", "🐲", "🥸", "🤓", "🤖", "👺", "🤡"];
      return avatars[Math.floor(Math.random() * avatars.length)];
    };

    /* Function to create a new portal in the database */
    const createPortal = async () => {
      console.log('createing portal')
      /* Create the player that will become the leader */
      const player = {
        id: uuid(),
        name: userName,
        leader: true,
        avatar: getAvatar(),
        points: 0,
        answerLock: false,
      };

      /* Create the portal with babel bread and add this player */
      const portal = await babelBread().add("portals", {
        params: {
          game: "liarliar",
          phase: "waiting",
          players: [player],
          rounds: [],
        },
      });

      console.log(portal);
      updateBabelState({code: portal.code})
      /* Authenticate our newly created player */
      babelAuth.authenticate('liarliar', player.id, () => {
        setRedirectToReferrer(true);
      });
      console.log(window.location.pathname)

      if (window.location.pathname == '/liarliar') {
        window.location.href = 'liarliar/' + portal.code;
        return;
      }

      /* If we were referred here take us where we wanted to go */
      if (redirectToReferrer === true) {
        return <Redirect to={state?.from || '/'} />
      }
  }

  /* Handle change in user input */
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
}
