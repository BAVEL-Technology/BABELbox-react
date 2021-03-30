import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useNavigation } from "react-navi";
import babelBread from "../../../../utils/babelBread";
import uuid from "../../../../utils/uuid";
import JoinPortal from "./JoinPortal";

export default function Join({
  game,
  request,
  context,
  playerStructure,
  portalStructure,
}) {
  return (
    <div className="flex flex-col w-full items-center min-h-screen">
      <div className="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4">
        <JoinPortal
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
