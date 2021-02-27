import React, { useState, useEffect } from 'react';
import Navbar from "../components/Nav";
import { Clown } from "../components/Logos";
import Steps from "../components/HeroComponents/Steps";
import BBLogo from "../components/BBLogo";
import GameButton from "../components/GameButton";
import PortalCodeCard from "../components/LobbyCards/PortalCodeCard";
import ToAboutUsButton from '../components/AboutUs/ToAboutUsButton';
import LeftSide from "../components/HeroComponents/LeftSide.js";
import RightSide from "../components/HeroComponents/RightSide.js";
import Hero from "../components/HeroComponents/Hero.js";
import About from "../components/HeroComponents/About.js";
import Games from "../components/HeroComponents/Games.js";
import Box from "../components/Box";
import Footer from "../components/Footer";

function main() {
  const [page, setPage] = useState(0);
  const [isVisible, setVisible] = useState(true);

  return (
        <div className="bg-pink-200">
        <Navbar color="babelPink-500"/>
        <div className="fixed h-full right-4">
          <ul className="flex h-full flex-col items-center justify-center space-y-4 pr-3">
            <li className="bg-white rounded-full h-8 w-2"></li>
            <li className="bg-white rounded-full h-2 w-2"></li>
            <li className="bg-white rounded-full h-2 w-2"></li>
            <li className="bg-white rounded-full h-2 w-2"></li>
          </ul>
        </div>
        <Hero />
        <About />
        <Games />
        <div className="w-full h-full flex flex-col bg-pink-200">
          <div className="px-24">
            <Steps
              className={`${isVisible ? 'is-visible' : ''}`}
              step="1"
              title="Open up your phone"
              img="./images/lets_go.png"
              p="Just take out your phone and head to babelbox.app. Oh wait...you're alredy here! Great job, check out all the awesome games we have to offer and play
              with your family and friends whenever you like! No sign up required."
            />
            <Steps
              className={`${isVisible ? 'is-visible' : ''}`}
              step="2"
              title="Get your crew together"
              img="./images/uncleted.png"
              p="Babelbox games work great weather you are in the room with your frineds and family or playing
              remotely across the globe. Babelbox has something for everyone...even uncle Ted."
            />
            <Steps
              className={`${isVisible ? 'is-visible' : ''}`}
              step="3"
              title="Have a blast"
              img="./images/rocketship.png"
              p="Easy as 1, 2, 3! Get started quickly and play awesome games with your friends near and far! If you'd like help, just check out the
              help page for each game."
            />
          </div>
        </div>
        </div>
  );
}

export default main;
