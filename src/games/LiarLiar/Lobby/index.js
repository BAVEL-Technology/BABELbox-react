import React, { Component, useContext } from "react";
import PlayButton from "../PlayButton";
import GameTitle from "../GameTitle";
import BBLogo from "../../../components/BBLogo";

function Lobby () {

  return (
    <div>
      {/* Add small logo at the top of the page. */}
      <BBLogo small={true}/>

      <GameTitle
        classes="font-bold w-full my-4 flex items-center justify-around text-yellow-600 p-4 lg:text-5xl md:text-5xl text-3xl text-center rounded-xl tracking-widest"
        src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f925.png"
        name="Liar Liar"
      />
      <PlayButton />
    </div>
  );
}


export default Lobby;
