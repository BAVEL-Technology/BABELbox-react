import { map, mount, route, redirect } from 'navi'
import React from 'react'
import { authService } from "../utils/authService"

export default mount({
  '': map(async (request, context) => {
    // Render a link to the login screen if the user isn't currently
    // logged in.
    const auth = await authService.authenticate({ game: context.game, code: request.params.code })
    console.log(auth)
    if (auth == 401) {
      return redirect(context.onPortalNotFound)
    } else if (auth > 401) {
      return redirect(context.onWrongUser)
    }
    // Return a page with the resulting data.
    return route({
      title: 'Spot',
      view: context.onSuccess,
    })
  })
})
