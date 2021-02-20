import React from "react";
import Card from "./Card";

const Gateway = (props) => {
  return (
    <div className="flex flex-col w-full items-center min-h-screen">
      <div className="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4">
        <p
          className={`text-${props.color} lg:text-7xl md:text-7xl text-5xl text-center font-semibold mb-4`}
          // style={`font-family: ${props.font}`}
        >
          {props.Title}
        </p>
        <p
          id="tag-line"
          className={`lg:text-3xl md:text-3xl text-2xl text-${props.color} text-center mb-4`}
          // style={`font-family: ${props.font}`}
        >
          {props.tagline}
        </p>
      </div>

      <a className={props.HowtoPlay} href={props.href}>
        <Card />
      </a>
    </div>
  );
};

export default Gateway;
