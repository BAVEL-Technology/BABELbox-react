import { useBabel, useUpdateBabel, useBabelAuth } from '../BabelContext';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory,
  useParams
} from "react-router-dom";

export default function PortalRoute({
    children,
    onPortalNotFound,
    onUserNotFound,
    code,
    game,
    ...rest
  }) {
  /* Use babel auth hook to see if there is a user stored for this game in babel state */
  const isAuthenticated = useBabelAuth()
  .isAuthenticated(game).length > 0 ? true : false
  console.log(useBabelAuth().isAuthenticated(game))
  /*
  * Use babel auth hook to see if the portal we are looking for exists
  * Use params hook to see what the code is
  */
  const response = useBabelAuth().portalExists(game, window.location.pathname.split('/')[2]).response
  console.log(window.location.pathname.split('/')[2])
  /*
  * If response is null, it means that the async function isn't done yet
  * TODO: Add a loading component, maybe only show it if it takes more than a second
  * TODO: Some of the syntax here is complicatd
  */
  if (!response) {
    return <p>loading...</p>
  }
  const portalExists = Array.isArray(response) ? false : true
  console.log(portalExists)
  /*
  * Return the children of this route if we are authenticated
  * Or redirect to the onFail page, and send the from loaction as part of state
  */
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isAuthenticated && portalExists) return ( children );
        else if (portalExists && !isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: `${onUserNotFound}`,
                state: { from: location }
              }}
            />
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: `${onPortalNotFound}`,
                state: { from: location }
              }}
            />
          );
        }
      }}
    />
  );
}
