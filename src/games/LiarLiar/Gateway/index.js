import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useNavigation } from "react-navi";
import babelBread from "../../../utils/babelBread";
import uuid from "../../../utils/uuid";
import CreatePortal from "./CreatePortal";
import FindAndJoinPortal from "./FindAndJoinPortal";
import Join from "./Join";
import HowToPlay from "../HowToPlay";
import GameTitle from "../GameTitle";

export function JoinPortal({ game, request, context, playerStructure, portalStructure }) {
  return <Join game={game} request={request} context={context} playerStructure={playerStructure} portalStructure={portalStructure}/>;
}

export function Gateway({
  game,
  request,
  context,
  playerStructure,
  portalStructure,
}) {
  return (
    <div className="flex flex-col w-full items-center min-h-screen">
      <div className="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4">
        <div>
            <GameTitle className="font-bold w-full my-4 flex items-center justify-around text-yellow-600 p-4 lg:text-5xl md:text-5xl text-3xl text-center rounded-xl tracking-widest"
              src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f925.png"
              name="Liar Liar" />
        </div>
        <button className="w-full">
          <a href="/liarliar/how-to-play" className="w-full">
            <div
              className={`my-6 flex items-center justify-center bg-babelYellow-700 w-full text-white p-4 font-semibold text-2xl lg:text-4xl md:text-3xl text-center rounded-xl tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-2`}
              style={{ fontFamily: "Sniglet" }}
            >
              <p id="how-to-play" className="p-4 flex-grow">
                How To Play
              </p>
            </div>
          </a>
        </button>
        <FindAndJoinPortal
          game={game}
          request={request}
          context={context}
          playerStructure={playerStructure}
          color="babelYellow-700"
          font=" 'Sniglet', cursive"
        />
        <CreatePortal
          game={game}
          request={request}
          context={context}
          playerStructure={playerStructure}
          portalStructure={portalStructure}
          color="babelYellow-700"
          font=" 'Sniglet', cursive"
        />
      </div>
    </div>
  );
}
