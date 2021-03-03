/* Pull in Navi and Babel Bread dependencies */
import { map, mount, route, redirect } from 'navi'
import babelBread from "utils/babelBread"

export default mount({
  '': map(async (request, context) => {
    /* Authenticate the current user for this game and code */
    const authResponse = await context.authenticate({
      game: context.game, code: request.params.code
    })
    console.log(authResponse)
    /*
    * If we get a 401 (the portal wasn't found) redirect the user to the
    * onPortalNotFound route, or if the portal exists, but the user isn't
    * inside the Local DB redirect to the onWrongUser route.
    */
    if (authResponse == 401) return redirect(context.onPortalNotFound)
    else if (authResponse > 401) return redirect(context.onWrongUser)

    /* If all is good and we got the 200 response return the onSuccess Component */
    return route({
      title: 'Spot',
      getData: async () => {
        return await babelBread()
        .read('portals', { code: request.params.code })
        .first()
      },
      view: context.onSuccess,
    })
  })
})
