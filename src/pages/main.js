import React from "react";
import BBLogo from "../components/BBLogo/NewLogo/Wrapper";
import GameButton from "../components/GameButton";
import PortalCodeCard from "../components/LobbyCards/PortalCodeCard";
import ToAboutUsButton from '../components/AboutUs/ToAboutUsButton';
import Background from "../components/HeroComponents/Background.js";
import Box from "../components/Box";
import Games from "../components/GameButton/Wrapper";

function Main() {

  return (
    <>
    <Background />
    <Games />
    <div className="h-full flex justify-center">
      <div className="flex flex-col items-center space-y-12">
        {/* Accepts array of colors and positions, and size, and any text */}
        <div className="animate__animated animate__fadeInDown">
          <BBLogo>BABELBOX</BBLogo>
        </div>
        <p className="text-xl font-semibold text-center w-5/12 italic text-white animate__animated animate__fadeInUp animation-delay-500">
          A collection of games for the whole crew weather you are together or apart, to help leave you
          laugh, cry, and unlock your competative side, leaving you more connected with your loved ones.
        </p>
        <svg className="w-24 h-24 animate__animated animate__zoomIn absolute top-80 -ml-48 animation-delay-1000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 125">
          <defs>
            <pattern id="img1" patternUnits="userSpaceOnUse" width="200" height="200">
              <image href="https:bit.ly/3bB6tfQ" x="-35" y="-10" width="200" height="200" />
            </pattern>
          </defs>
          <path fill="url(#img1)" stroke="none" d="M52 4.5621778264911a21 21 0 0 1 21 0l34.425625842204 19.875644347018a21 21 0 0 1 10.5 18.186533479473l0 39.751288694036a21 21 0 0 1 -10.5 18.186533479473l-34.425625842204 19.875644347018a21 21 0 0 1 -21 0l-34.425625842204 -19.875644347018a21 21 0 0 1 -10.5 -18.186533479473l0 -39.751288694036a21 21 0 0 1 10.5 -18.186533479473"></path>
        </svg>
        <div className="flex items-center justify-center w-96 h-96 bg-babelYellow-700 rounded-full animate__animated animate__zoomIn animation-delay-750">
        </div>
      </div>
    </div>
    </>
  );
}

export default Main;
