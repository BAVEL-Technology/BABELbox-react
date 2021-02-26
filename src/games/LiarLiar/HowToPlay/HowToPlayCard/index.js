import React from "react";

const HowToPlayCard = (props) => {
  return (
    <div>
      <div
        className={`my-6 flex-1 items-center justify-center bg-${props.color} w-full text-white p-4 text-center rounded-xl tracking-widest`}
      >
        <h2 className="text-2xl">{props.type}</h2>
        <p className="mt-2"> {props.rule} </p>
      </div>
    </div>
  );
};

export default HowToPlayCard;
