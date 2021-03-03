import React from "react"
import { mount, route } from 'navi'
import Main from "../pages/main"
import { LiarLiarRoutes } from "./LiarLiar/routes"

export const routes = mount({
    '/': route({
      title: 'BabelBox',
      // getData: () => api.fetchProducts(),
      head: <>
        <meta name="description" content="Babelbox description" />
        <script>
          {/* ADD SCRIPTS HERE FOR ANALYTICS */}
        </script>
      </>,
      view: <Main/>,
    }),
    ...LiarLiarRoutes
  })
