import React from "react"
import { route, map, lazy, withContext } from 'navi'
import LiarLiar from "../../games/liarliar"
import HowToPlay from "../../games/liarliar/HowToPlay"
import { JoinPortal} from "../../games/liarliar/Gateway"

export const LiarLiarRoutes = {
  '/liarliar': route({
    title: 'LiarLiar',
    head: <>
      <meta name="description" content="Babelbox description" />
      <script>
        {/* ADD SCRIPTS HERE FOR ANALYTICS */}
      </script>
    </>,
    view: <LiarLiar />,
  }),
  '/liarliar/how/to/play': route({
    title: 'LiarLiar',
    head: <>
      <meta name="description" content="Babelbox description" />
      <script>
        {/* ADD SCRIPTS HERE FOR ANALYTICS */}
      </script>
    </>,
    view: <HowToPlay />,
  }),
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
  '/liarliar/:code': withContext(
  (request, parentContext) => ({
    ...parentContext,
    game: 'liarliar',
    onPortalNotFound: '/liarliar',
    onWrongUser: `/liarliar/${request.params.code}/join`,
    onSuccess: <LiarLiar />
  }),
  lazy(() => {
      return import('../portalRoute')
    }),
  )
}
