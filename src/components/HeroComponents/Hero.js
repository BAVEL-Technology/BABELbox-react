import { OblongButton } from "../ui";
import React, { useState, useEffect } from 'react';
import Blob from "../Blob";

const Hero = () => {
  return (
    <div className="w-full h-screen grid grid-cols-12 gap-12 bg-pink-200 px-24 items-center">
      <div className="col-span-5">
        <img src="./images/doodle-5.png" className="absolute z-30 h-48 top-12 left-24 transform -rotate-45" />
        <img src="./images/Color=White-Matte.png" className="absolute z-30 h-24 bottom-80 left-12 transform -rotate-45" />
        <img className="object-scale-down relative -mt-36 z-30" style={{height: '35rem'}} src="./images/game_phone.png" />
        <svg fill="currentColor" className="absolute -top-96 mt-20 -left-96 -ml-12 text-babelPink-700" height="2000" width="2000" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <Blob />
        </svg>
      </div>
      <div className={`text-babelPink-500 col-span-7 font-poppins items-center`}>
        <svg className="h-48 w-48 absolute top-16 right-36" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F2F4F8" d="M35.2,-47C45,-33.8,51.7,-22.1,52.9,-10.1C54.1,1.9,49.9,14.2,45.1,29.3C40.3,44.4,34.8,62.4,22.2,71.7C9.6,80.9,-10.1,81.4,-29.3,76.3C-48.5,71.1,-67.1,60.3,-77.6,43.9C-88.1,27.5,-90.5,5.6,-86.7,-15.2C-82.9,-35.9,-72.9,-55.4,-57.4,-67.5C-41.9,-79.6,-21,-84.3,-4.1,-79.4C12.8,-74.5,25.5,-60.1,35.2,-47Z" transform="translate(100 100)" />
        </svg>
        <div className="space-y-4 relative">
          <p className="text-4xl font-bold mb-24 text-babelPink-500 p-1 rounded-md leading-normal">
            <span className="ul-bg">BABELBOX</span>
             &nbsp;is a collection of awesome games that work&nbsp;<span className="ul-bg">realtime</span> with you and your crew.
            Play games with your&nbsp;<span className="ul-bg">family, friends and teams</span> weather you are in the same room,
            or &nbsp;<span className="ul-bg">thousands of miles away</span>
          </p>
        </div>
        <div className="flex justify-between cursor-pointer w-10/12 animate__animated animate__fadeInUp animation-delay-750">
          <OblongButton text="Show me more" color="babelPink-400" fill="true"/>
          <div className="flex items-center space-x-4">
            <p className="font-semibold">
              <span className="ul">See the Games</span>
            </p>
            <svg className="h-5 w-5 text-babelPink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
