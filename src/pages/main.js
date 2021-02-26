
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Nav";
import { Clown } from "../components/Logos";
import { OblongButton } from "../components/ui";
import Steps from "../components/HeroComponents/Steps";
import BBLogo from "../components/BBLogo";
import GameButton from "../components/GameButton";
import PortalCodeCard from "../components/LobbyCards/PortalCodeCard";
import ToAboutUsButton from '../components/AboutUs/ToAboutUsButton';
import LeftSide from "../components/HeroComponents/LeftSide.js";
import RightSide from "../components/HeroComponents/RightSide.js";
import Box from "../components/Box";
import Footer from "../components/Footer";

function main() {
  const [page, setPage] = useState(0);
  const [isVisible, setVisible] = useState(true);

  return (
        <div className="bg-babelPink-600">
        <Navbar color="white"/>
        <div className="w-full h-screen flex flex-col bg-babelPink-600 px-12">
          <div className={`flex items-center justify-around items-center h-full `}>
            <div className="h-full">
              <img style={{width: '64rem'}} src="./images/game_phone.png" />
            </div>
            <div className={`text-white font-poppins space-y-16 ${page == 0 ? '' : 'animate__animated animate__fadeOutUp'}`}>
              <div className="space-y-4 w-10/12">
                <img src="./images/doodle-5.png" className="absolute z-50 h-48 top-12 right-24 transform -rotate-45" />
                <img src="./images/Color=White-Matte.png" className="absolute z-50 h-24 bottom-24 left-36 transform -rotate-45" />
                <div style={{fontSize: '10rem'}} className="space-x-6 justify-center font-black uppercase text-8xl animate__animated animate__fadeInUp">
                  BABEL<br />BOX
                </div>
                <p className="text-lg font-semibold animate__animated animate__fadeInUp animation-delay-500">
                  Open our box for an awesome collection of real time games for you to enjoy with the crew weather you are together or apart. Gut-busting good times.
                </p>
              </div>
              <div className="flex justify-between cursor-pointer w-10/12 animate__animated animate__fadeInUp animation-delay-750">
                <OblongButton text="Sign Up" color="babelPink-500" fill="true"/>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold">
                    See the Games
                  </p>
                  <svg className="h-5 w-5 text-babelPink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center pb-6 cursor-pointer animate__animated animate__zoomIn animation-delay-750">
            <OblongButton text="How it Works" color="babelPink-500" />
          </div>
        </div>
        <div className="w-full h-full flex flex-col bg-babelPink-600">
          <div className="px-12">
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
          <div className="w-full flex items-center justify-center pb-6 cursor-pointer animate__animated animate__zoomIn animation-delay-750">
            <OblongButton text="How it Works" color="babelPink-500" />
          </div>
        </div>
        </div>
  );
}

export default main;
