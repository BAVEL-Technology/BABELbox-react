/* Pull in Navi dependencies */
import { mount, route } from 'navi'

/* Pull in HomePage Component */
import Main from "pages/Main"
import AboutUs from "pages/AboutUs";
import Help from "pages/Help";

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
  '/about-us': route({
    title: 'BabelBox',
    head: <>
      <meta name="description" content="Babelbox description" />
      <script>
        {/* ADD SCRIPTS HERE FOR ANALYTICS */}
      </script>
    </>,
    view: <AboutUs />,
  }),
  '/help': route({
    title: 'BabelBox',
    head: <>
      <meta name="description" content="Babelbox description" />
      <script>
        {/* ADD SCRIPTS HERE FOR ANALYTICS */}
      </script>
    </>,
    view: <Help />,
  }),
  /* Spread Each Game's Routes Across Mount Matcher */
  ...LiarLiarRoutes
})
