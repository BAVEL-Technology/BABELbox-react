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
    <div className="bg-pink-200">
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
      {/* TODO: We need copy for this About section. Commenting out until we have copy */}
      {/* <About /> */}
      {/* TODO: Once we have more games, uncomment this and make cool cards for each game in the component */}
      {/* <Games /> */}
      <div className="w-full h-full flex flex-col bg-pink-200 md:w-32 lg:w-full">
        <div className="px-24">
          <Steps
            className={`${isVisible ? "is-visible" : ""}`}
            step="1"
            title="Open up your phone"
            img="./images/lets_go.png"
            p="Just take out your phone and head to babelbox.app. No sign up required. Oh wait...you're already here! Great job, check out all the awesome games we have to offer and play
      with your family and friends whenever you like!"
          />
          <Steps
            className={`${isVisible ? "is-visible" : ""}`}
            step="2"
            title="Get your crew together"
            img="./images/uncleted.png"
            p="Babelbox games work great whether you are in same room or playing remotely over internet. Babelbox has something for everyone...even uncle Ted."
          />
          <Steps
            className={`${isVisible ? "is-visible" : ""}`}
            step="3"
            title="Have a blast"
            img="./images/rocketship.png"
            p="Easy as 1, 2, 3! Get started quickly and play awesome games with your friends near and far! If you're a dev and would like to contribute, drop us a line through our Github."
          />
        </div>
      </div>
      <p className="text-xl font-semibold text-center w-5/12 italic text-white animate__animated animate__fadeInUp animation-delay-500 md:w-32 lg:w-full">
        A collection of games for the whole crew weather you are together or
        apart, to help leave you laugh, cry, and unlock your competative side,
        leaving you more connected with your loved ones.
      </p>
      <svg
        className="w-24 h-24 animate__animated animate__zoomIn absolute top-80 -ml-48 animation-delay-1000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 125 125"
      >
        <defs>
          <pattern
            id="img1"
            patternUnits="userSpaceOnUse"
            width="200"
            height="200"
          >
            <image
              href="https:bit.ly/3bB6tfQ"
              x="-35"
              y="-10"
              width="200"
              height="200"
            />
          </pattern>
        </defs>
        <path
          fill="url(#img1)"
          stroke="none"
          d="M52 4.5621778264911a21 21 0 0 1 21 0l34.425625842204 19.875644347018a21 21 0 0 1 10.5 18.186533479473l0 39.751288694036a21 21 0 0 1 -10.5 18.186533479473l-34.425625842204 19.875644347018a21 21 0 0 1 -21 0l-34.425625842204 -19.875644347018a21 21 0 0 1 -10.5 -18.186533479473l0 -39.751288694036a21 21 0 0 1 10.5 -18.186533479473"
        ></path>
      </svg>
      <div className="flex items-center justify-center w-96 h-96 bg-babelYellow-700 rounded-full animate__animated animate__zoomIn animation-delay-750"></div>
    </div>
  );
}

export default Main;
