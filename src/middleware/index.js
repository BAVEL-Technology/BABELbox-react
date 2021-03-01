import React from 'react';
import { Redirect } from 'react-router-dom';
import babelBread from "../utils/babelBread";
import { matchPath } from "react-router";

export default class Middleware {
  async routeToDisplay (routeToVisit, gameFolder, path) {
      try {
        /* Use matchPath to determine the current path outside <Router> */
        const match = matchPath(window.location.pathname, {
          path: `/${path}/:code`,
          exact: false,
          strict: false
        });

        const ret = await this.portal(routeToVisit, gameFolder, match);
        console.log(ret);
        return ret.routeObject;
      } catch (err) {
        console.log(err);
      };
  }

  _getRouteReturn (status, routeObject) {
      return { status, routeObject };
  }

  async portal (component, gameFolder, match) {
    if (!match) {
      const Component = await React.lazy(() => import(`../games/${gameFolder}/Gateway/PrePortal`));
      return this._getRouteReturn(true, <Component />);
    } else if (match.params.code == 'howtoplay') {
      const Component = React.lazy(() => import(`../games/${gameFolder}/HowToPlay`));
      return this._getRouteReturn(true, <Component />);
    } else {
      const destination = await this.prePortalCheck(match.params.code);
      if (!destination) return this._getRouteReturn(true, component);
      else {
        const Component = React.lazy(() => import(`../games/${gameFolder}/Gateway/${destination}`));
        return this._getRouteReturn(false, <Component />);
      }
    }
  }

  async prePortalCheck(code) {
    /* Get the current portal */
    const portal = await babelBread().read('portals', { code }).first();

    /*
    * If there is no portal, take them to the pre portal gateway to make a portal,
    * or join a new one
    */
    if (portal) {
      return 'PrePortal';
    }

    /* Get the currently logged in user for this game */
    const loggedInUser = localStorage.getItem(`${path}User`);

    /* If thre is no logged in user, take them to the post portal gateway to make a user */
    if (!loggedInUser) {
      return 'PostPortal';
    }

    /*
    * If the user is not currently in this portals list of players,
    * log them out and take them post portal
    */
    const userInsideDb = portal.params.players
    .filter((player) => player.id == loggedInUser);
    if (!userInsideDb) {
      localStorage.setItem(`${path}User`, '');
      return 'PostPortal';
    }

    return false;
  }
};
