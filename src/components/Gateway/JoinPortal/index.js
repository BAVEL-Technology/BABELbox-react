import React from "react";
import "./style.css";
import bb from "../../../utils/babelBread";
import getAvatar from "../../../utils/avatar";
import uuid from "../../../utils/uuid";

const JoinPortal = (props) => {

  // TODO: Make sure to check to make sure both inputs are valid.
  const join = async (portalID, userName) => {
      const updates = await bb().push('portals', { code: portalID }, 
        {'params.players': 
          {
            id: uuid(),
            name: userName,
            leader: false,
            avatar: getAvatar(),
            points: 0,
          }
        }
      );

      console.log(updates);
  
      // setLiarLiarState({
      //   portalID: portal.code,
      //   portalPhase: portal.params.phase,
      //   users: portal.params.players,
      //   spectators: [],
      //   question: "",
      //   answers: [],
      //   round: portal.params.round,
      // });
    };

  return (
    <>
      <div className={`bg-${props.color} w-2/3 flex flex-col text-gray-100 p-4 md:p-8 rounded-xl tracking-widest my-8 cursor-pointer`} style={{ fontFamily: props.font }}>
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
              id="portal-name"
              type="text"
              name="portal-name"
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
              onChange={()=>{}}
              type="text"
              name="user-name"
              placeholder="Username"
              className="block appearance-none focus:outline-none border-b-4 border-gray-100 mb-8 w-full bg-transparent text-xl text-gray-700 rounded-lg px-4 py-3"
            />
          </div>
        </div>

        <button
          id="join-portal-button"
          onClick={() => {join("aegis-craic", "ChristianButFromCode");}}
          className="place-self-center my-4 bg-blue-400 h-12 text-gray-100 p-4 rounded-tl-xl rounded-br-xl rounded-tr rounded-bl flex items-center justify lg:w-2/3 md:w-2/3 lg:text-3xl md:text-3xl text-xl border-4 border-blue-400 hover:bg-gray-100 hover:text-blue-400">
          Join Portal
        </button>
      </div>
    </>
  );
};

export default JoinPortal;
