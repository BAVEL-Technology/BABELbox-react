import React, { useState } from 'react'
import { useNavigation } from 'react-navi'
import babelBread from "../../../utils/babelBread"
import uuid from "../../../utils/uuid"
import CreatePortal from "./CreatePortal";
import FindAndJoinPortal from "./FindAndJoinPortal";
import Join from "./Join";

export function JoinPortal({ game, request, context }) {
  return <Join game={game} request={request} context={context} />
}

export function Gateway({ game, request, context, playerStructure, portalStructure }) {
  return (
    <div className="flex flex-col w-full items-center min-h-screen">
      <div className="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4">
        <FindAndJoinPortal
        game={game}
        request={request}
        context={context}
        playerStructure={playerStructure}
        color="babelYellow-700"
        font=" 'Sniglet', cursive" />
        <CreatePortal
        game={game}
        request={request}
        context={context}
        playerStructure={playerStructure}
        portalStructure={portalStructure}
        color="babelYellow-700"
        font=" 'Sniglet', cursive" />
      </div>
    </div>
  )
}
