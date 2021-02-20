import React from "react";
import BBLogo from "../components/BBLogo";
import GameButton from "../components/GameButton";
import ToAboutUsButton from '../components/AboutUs/ToAboutUsButton';

function Main() {

  return (
    <div>
      <BBLogo/>
      <div className="buttons h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4 flex flex-col items-center">
        <GameButton
          classes="game-button w-full my-4 flex items-center justify-around bg-yellow-500 active:bg-yellow-600 text-gray-700 p-4 lg:text-5xl md:text-5xl text-3xl text-center rounded-xl tracking-widest shadow-lg duration-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
          src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f925.png"
          name="Liar Liar"
          location="/liarliar"
        />
      </div>
      <ToAboutUsButton/>
    </div>
  );
}

export default Main;
