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
        {/* TODO: We need copy for this About section. Commenting out until we have copy */}
        {/* <About /> */}
        {/* TODO: Once we have more games, uncomment this and make cool cards for each game in the component */}
        {/* <Games /> */}
        <div className="w-full h-full flex flex-col bg-pink-200">
          <div className="px-24">
            <Steps
              className={`${isVisible ? 'is-visible' : ''}`}
              step="1"
              title="Open up your phone"
              img="./images/lets_go.png"
              p="Just take out your phone and head to babelbox.app. No sign up required. Oh wait...you're already here! Great job, check out all the awesome games we have to offer and play
              with your family and friends whenever you like!"
            />
            <Steps
              className={`${isVisible ? 'is-visible' : ''}`}
              step="2"
              title="Get your crew together"
              img="./images/uncleted.png"
              p="Babelbox games work great whether you are in same room or playing remotely over internet. Babelbox has something for everyone...even uncle Ted."
            />
            <Steps
              className={`${isVisible ? 'is-visible' : ''}`}
              step="3"
              title="Have a blast"
              img="./images/rocketship.png"
              p="Easy as 1, 2, 3! Get started quickly and play awesome games with your friends near and far! If you're a dev and would like to contribute, drop us a line through our Github."
            />
          </div>
        </div>
        </div>
  );
}

export default main;
