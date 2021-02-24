import React from "react";
import Navbar from "../components/Nav";
import { FlamingClown } from "../components/Logos";
import { OblongButton } from "../components/ui";

function Main() {

  return (
    <div className="w-full h-screen flex flex-col babelBg">
      <Navbar color="babelPink-500"/>
      <div className="grid grid-cols-12 items-center h-full">
        <div className="col-span-6">
          <div className="absolute top-0">
          </div>
        </div>
        <div className="col-span-5 text-white font-poppins space-y-16">
          <div className="space-y-4 w-10/12">
            <p className="font-black uppercase text-8xl">
              BABEL<br />BOX
            </p>
            <p className="text-sm font-light">
              Open our box for an awesome collection of real time games for you to enjoy with the crew weather you are together or apart. Gut-busting good times.
            </p>
          </div>
          <div className="flex justify-between cursor-pointer w-10/12">
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
        <div className="col-span-1 h-full">
          <ul className="flex flex-col h-full items-center justify-center">
            <li className="rounded-full bg-babelGrey-400 h-2 w-2"></li>
          </ul>
        </div>
      </div>
      <div className="w-full flex items-center justify-center pb-6 cursor-pointer">
        <OblongButton text="How it Works" color="babelPink-500" />
      </div>
    </div>
  );
}

export default Main;
