import React from "react";
import BBLogo from "../components/BBLogo/NewLogo/Wrapper";
import GameButton from "../components/GameButton";
import PortalCodeCard from "../components/LobbyCards/PortalCodeCard";
import ToAboutUsButton from "../components/AboutUs/ToAboutUsButton";
import Background from "../components/HeroComponents/Background.js";
import Box from "../components/Box";
import Games from "../components/GameButton/Wrapper";
import { useState } from "react";
import Nav from "../components/Nav";
import Hero from "../components/HeroComponents/Hero";
import Steps from "../components/HeroComponents/Steps";

function Main() {
  const [page, setPage] = useState(0);
  const [isVisible, setVisible] = useState(true);

  return (
    <div className="bg-blue-200">
      <Nav color="babelPink-500" />
      <div className="fixed h-full right-4">
        <ul className="flex h-full flex-col items-center justify-center space-y-4 pr-3">
          <li className="bg-white rounded-full h-8 w-2"></li>
          <li className="bg-white rounded-full h-2 w-2"></li>
          <li className="bg-white rounded-full h-2 w-2"></li>
          <li className="bg-white rounded-full h-2 w-2"></li>
        </ul>
      </div>
      <Hero />

      {/* <p className="text-xl font-semibold text-center w-5/12 italic text-white animate__animated animate__fadeInUp animation-delay-500 md:w-32 lg:w-full">
        A collection of games for the whole crew weather you are together or
        apart, to help leave you laugh, cry, and unlock your competative side,
        leaving you more connected with your loved ones.
      </p> */}

      {/* <div className="flex items-center justify-center w-96 h-96 bg-babelYellow-700 rounded-full animate__animated animate__zoomIn animation-delay-750"></div> */}
    </div>
  );
}

export default Main;
