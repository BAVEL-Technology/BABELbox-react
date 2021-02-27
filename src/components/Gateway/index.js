import React from "react";
import CreatePortal from "./CreatePortal";
import JoinPortal from "./JoinPortal";

const Gateway = (props) => {
  return (
    <div className="flex flex-col w-full items-center justify-items-center">
      <div className="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4">
        <p
          className={`text-${props.color} lg:text-7xl md:text-7xl text-5xl text-center font-semibold mb-4`}
          style={{ fontFamily: props.font }}
        >
          {props.title}
        </p>
        <p
          id="tag-line"
          className={`lg:text-3xl md:text-3xl text-2xl text-${props.color} text-center mb-4`}
          style={{ fontFamily: "Sniglet" }}
        >
          {props.tagline}
        </p>
      </div>
      {/* Join Portal */}
      <JoinPortal/>
      {/* Create Portal */}
      <CreatePortal color="babelYellow-700" font=" 'Sniglet', cursive" />

      <div className="p-8">
        {props.children}
      </div>
    </div>
  );
};

export default Gateway;
