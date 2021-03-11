/* Pull in React and Navi dependencies */
import React from "react";
import { route, map, lazy, withContext } from 'navi'

/* Pull in Major Components */
import HowToPlay from "../HowToPlay";
import { JoinPortal, Gateway } from "../Gateway";


/* Pull in your player and portal structures from the config file */
import { game, playerStructure, portalStructure } from "../game.config.js";

export const NewGameRoutes = {
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
      <div className="min-h-screen h-full">
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
      title: game.title,
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
    onSuccess: game.main
  }),
  lazy(() => {
      return import('../../../routes/portalRoutes')
    }),
  )
}
