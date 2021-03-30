import { OblongButton } from "../ui";
import React, { useState, useEffect } from "react";
import Blob from "../Blob";

const Hero = () => {
  return (
    <div className="w-full h-screen grid grid-cols-12 gap-12 bg-blue-200 px-24 items-center lg:w-full">
      <div className="col-span-12 md:col-span-5 w-96 pt-5 md:w-32 lg:w-96">
      <img className="" src="./images/babelbox.png" />
        {/* <img
          src="./images/doodle-5.png"
          className="absolute z-30 h-48 top-12 left-24 transform -rotate-45"
        />
        <img
          src="./images/Color=White-Matte.png"
          className="absolute z-30 h-24 bottom-80 left-12 transform -rotate-45"
        />
        <img
          className="object-scale-down relative -mt-36 z-30"
          style={{ height: "35rem" }}
          src="./images/game_phone.png"
        /> */}
        {/* <svg
          fill="currentColor"
          className="absolute -top-96 mt-20 -left-96 -ml-12 text-babelPink-700"
          height="2000"
          width="2000"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        > */}
          {/* <Blob /> */}
        {/* </svg> */}
      </div>
      <div
        className={`text-babelPink-500 col-span-7 font-poppins items-center`}
      >
          <p className="text-xl lg:text-4xl font-bold text-center mb-24 md:ml-10 text-babelPink-500 p-1 rounded-md leading-normal md:w-32 lg:w-full">
            <span className="ul-bg">BABELBOX</span>
            &nbsp;is a collection of awesome games that work in&nbsp;
            <span className="ul-bg">real time</span> with you and your crew.
            Play games with your&nbsp;
            <span className="ul-bg">family, friends and teams</span> whether you
            are in the same room, or &nbsp;
            <span className="ul-bg">thousands of miles away</span>
          </p>

      </div>
    </div>
  );
};

export default Hero;
