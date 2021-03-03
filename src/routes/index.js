/* Pull in Navi dependencies */
import { mount, route } from 'navi'

/* Pull in HomePage Component */
import Main from "pages/Main"

/* Pull in Each Game's Routes */
import { LiarLiarRoutes } from "../games/LiarLiar/routes"

export const routes = mount({
  '/': route({
    title: 'BabelBox',
    head: <>
      <meta name="description" content="Babelbox description" />
      <script>
        {/* ADD SCRIPTS HERE FOR ANALYTICS */}
      </script>
    </>,
    view: <Main />,
  }),
  /* Spread Each Game's Routes Across Mount Matcher */
  ...LiarLiarRoutes
})
