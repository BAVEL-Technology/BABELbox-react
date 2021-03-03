/* Pull in Navi dependencies */
import { route, map, lazy, withContext } from 'navi'

import { playerStructure, portalStructure } from "../game.config.js";
/* Pull in Major Components */
import LiarLiar from "games/LiarLiar/index2.js";
import HowToPlay from "games/LiarLiar/HowToPlay";
import { JoinPortal, Gateway } from "games/LiarLiar/Gateway";

export const LiarLiarRoutes = {
  /* ⚔️ Gateway Route */
  '/liarliar': map(async (request, context) => {
    return route({
      title: 'LiarLiar',
      head: <>
        <meta name="description" content="Babelbox description" />
        <script>
          {/* ADD SCRIPTS HERE FOR ANALYTICS */}
        </script>
      </>,
      view: 
      <div className="min-h-screen h-full bg-gradient-to-tl from-babelBlue-1000 via-babelBlue-900 to-babelCyan-700">
        <Gateway
        game={'liarliar'}
        request={request}
        context={context}
        playerStructure={playerStructure}
        portalStructure={portalStructure} />
      </div>
    })
  }),
  '/liarliar/how-to-play': route({
    title: 'LiarLiar',
    head: <>
    <meta name="description" content="Babelbox description" />
      <script>
        {/* ADD SCRIPTS HERE FOR ANALYTICS */}
      </script>
    </>,
    view: <HowToPlay />,
  }),

  /* 🤗 Join specific portal route */
  '/liarliar/:code/join': map(async (request, context) => {
    return route({
      title: 'LiarLiar',
      head: <>
        <meta name="description" content="Babelbox description" />
        <script>
          {/* ADD SCRIPTS HERE FOR ANALYTICS */}
        </script>
      </>,
      view: <JoinPortal game={'liarliar'} request={request} context={context}/>,
    })
  }),

  /* 🛡 Portal Route - Auth */
  '/liarliar/:code': withContext(
  (request, parentContext) => ({
    ...parentContext,
    game: 'liarliar',
    onPortalNotFound: '/liarliar',
    onWrongUser: `/liarliar/${request.params.code}/join`,
    onSuccess:
    <div className="min-h-screen h-full bg-gradient-to-tl from-babelBlue-1000 via-babelBlue-900 to-babelCyan-700">
      <LiarLiar />
    </div>
  }),
  lazy(() => {
      return import('../../../routes/portalRoutes')
    }),
  )
}
