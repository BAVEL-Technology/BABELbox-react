import React from "react"
import { route, map, lazy, withContext } from 'navi'
import LiarLiar from "../../games/LiarLiar"
import HowToPlay from "../../games/LiarLiar/HowToPlay"
import { JoinPortal} from "../../games/LiarLiar/Gateway"

export const LiarLiarRoutes = {
  '/liarliar': map(async (request, context) => {
    return route({
      title: 'LiarLiar',
      head: <>
        <meta name="description" content="Babelbox description" />
        <script>
          {/* ADD SCRIPTS HERE FOR ANALYTICS */}
        </script>
      </>,
      view: <LiarLiar request={request} context={context}/>
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
    onSuccess: <LiarLiar request={request} context={parentContext}/>
  }),
  lazy(() => {
      return import('../portalRoutes')
    }),
  )
}
