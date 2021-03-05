/* Pull in React and Navi dependencies */
import React from "react";
import { route, map, lazy, withContext } from 'navi'

/* Pull in Major Components */
import LiarLiar from "games/LiarLiar/index2.js";
import HowToPlay from "games/LiarLiar/HowToPlay";
import { JoinPortal, Gateway } from "games/LiarLiar/Gateway";


/* Pull in your player and portal structures from the config file */
import { game, playerStructure, portalStructure } from "../game.config.js";

export const LiarLiarRoutes = {
  /* ⚔️ Gateway Route */
  [`/${game.route}`]: map(async (request, context) => {
    return route({
      title: game.title,
      head: <>
        <meta name="description" content={game.description} />
        <script>
          {/* ADD SCRIPTS HERE FOR ANALYTICS */}
        </script>
      </>,
      view:
      <div className="min-h-screen h-full bg-gradient-to-tl from-babelBlue-1000 via-babelBlue-900 to-babelCyan-700">
        <Gateway
        game={game.route}
        request={request}
        context={context}
        playerStructure={playerStructure}
        portalStructure={portalStructure} />
      </div>
    })
  }),
  [`/${game.route}/how-to-play`]: route({
    title: game.title,
    head: <>
    <meta name="description" content={game.description} />
      <script>
        {/* ADD SCRIPTS HERE FOR ANALYTICS */}
      </script>
    </>,
    view: <HowToPlay />,
  }),

  /* 🤗 Join specific portal route */
  [`/${game.route}/:code/join`]: map(async (request, context) => {
    return route({
      title: 'LiarLiar',
      head: <>
        <meta name="description" content={game.description} />
        <script>
          {/* ADD SCRIPTS HERE FOR ANALYTICS */}
        </script>
      </>,
      view: <JoinPortal game={game.route} request={request} context={context}/>,
    })
  }),

  /* 🛡 Portal Route - Auth */
  [`/${game.route}/:code`]: withContext(
  (request, parentContext) => ({
    ...parentContext,
    game: game.route,
    onPortalNotFound: `/${game.route}`,
    onWrongUser: `/${game.route}/${request.params.code}/join`,
    onSuccess:
    <div className="flex justify-center min-h-screen h-full bg-gradient-to-tl from-babelBlue-1000 via-babelBlue-900 to-babelCyan-700">
      <div className="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4">
        <LiarLiar />
      </div>
    </div>
  }),
  lazy(() => {
      return import('../../../routes/portalRoutes')
    }),
  )
}
