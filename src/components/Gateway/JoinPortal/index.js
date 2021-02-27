import React from "react";
import "./style.css";

const JoinPortal = (props) => {
  return (
    <>
      <div
        className={`bg-${props.color} w-full flex flex-col text-gray-100 p-8 rounded-xl tracking-widest my-8 cursor-pointer`}
        style={{ fontFamily: props.font }}
      >
        <div id="portal-area" className="w-full flex justify-center">
          <div className="w-full mx-6 relative">
            <div className="status-bar border-b-4 border-blue-400 absolute top-7"></div>
            <input
              id="portal-name"
              type="text"
              name="portal-name"
              placeholder=" "
              className="block
      appearance-none focus:outline-none border-b-4 border-gray-100 w-full bg-transparent
      text-lg text-gray-100"
            />
            <label
              for="portal-name"
              className="duration-300 absolute left-0 top-0 mt-8 w-full
      -top-10 -z-1 label lg:text-3xl md:text-3xl text-xl"
            >
              Portal name
            </label>
          </div>
        </div>
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
        <button
          id="join-portal-button"
          onclick={`joinPortal(${game.url})`}
          className="place-self-center
  my-4 bg-blue-400 h-12 text-gray-100 p-4 rounded-tl-xl rounded-br-xl rounded-tr
  rounded-bl flex items-center justify-center lg:w-2/3 md:w-2/3 lg:text-3xl md:text-3xl text-xl border-4 border-blue-400
  hover:bg-gray-100 hover:text-blue-400"
        >
          Join Portal
        </button>
      </div>
    </>
  );
};

export default JoinPortal;
