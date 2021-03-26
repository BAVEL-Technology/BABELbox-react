import React, { Component } from "react";

 const PlayButton = (props) => {
    return (
      <div className="cursor-pointer flex-col flex item-center justify-center space-y-2" onClick={props.onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-16 w-16"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            className="text-green-600 hover:text-green-500"
            fill="currentColor"
          />
          <path
            className="text-gray-200"
            fill="currentColor"
            d="M15.51 11.14a1 1 0 0 1 0 1.72l-5 3A1 1 0 0 1 9 15V9a1 1 0 0 1 1.51-.86l5 3z"
          />
        </svg>
        <p
          style={{ fontFamily: "Sniglet" }}
          className={`font-bold text-center text-white font-semibold text-xl tracking-wide lg:text-xl md:text-xl`}
        >
          PLAY
        </p>
      </div>
    );
};

export default PlayButton;
