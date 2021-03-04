/* Pull in dependencies from Local DB and Babel Bread */
import { create, read, update, add, remove, clear, drop } from "./localdb";
import babelBread from "./babelBread";

/* Authentication middleware */
export const auth = {
  /* Login user for Game, Code, with database id */
  async login({ game, code, user }) {
    try {
      /* Find the current portal, or return false if it doesn't exist */
      const portal = await babelBread().read('portals', { code }).first()
      if (!portal) return false

      /* Clean up the old username cookies 🍪 */
      if (read('gamePlayers', { game, code })) this.cleanUp(game, code)

      /*
      * Store new cookie for current user and current game 🍪
      * Then update the current instance of auth and return true
      */
      let players = create('gamePlayers', { game, code, user })
      console.log(players)
      this.users = read('gamePlayers')
      console.log(this.users)
      return user
    } catch (err) {
      console.log(err)
    }
  },

  /* Get the users stored in this auth instance - which comes from Local DB 🍪 */
  getUsers() {
    return this.users
  },

  /* Get the users stored in this auth instance - which comes from Local DB 🍪 */
  async authenticate({ game, code }) {
    try {
      /* Find the current portal, or return 401 error if it doesn't exist */
      const portal = await babelBread().read('portals', { code }).first()
      if (portal.length < 1) return 401
      /*
      * Find the current users and filter for only this game and code's user
      * and if we can't find a user, return a 402 error
      */
      const users = this.users.filter((user) => user.game == game)
      const user = users.filter((user) => {
        return user.code == code
      })
      if (user.length < 1) return 402
      /*
      * Make sure that the Local DB user exists in the portal, if it doesn't
      * then return a 403 error
      */
      const gameUser = portal.params.players.filter((player) => {
        return player.id == user[0].user
      })
      console.log(gameUser)
      if (gameUser.length < 1) return 403

      /* If there are no errors return user id */
      return gameUser[0].id
    } catch (err) {
      console.log(err)
    }
  },

  /* Logout the user to a specific game and portal */
  logout({ game, code }) {
    /*
    * Clean up the old username cookies 🍪
    * then reset the auth instance
    */
    if (read('gamePlayers', { game, code })) this.cleanUp(game, code)
    this.users = read('gamePlayers')
  },

  /* Remove Local DB cookies 🍪 for a users game and code */
  cleanUp(game, code) {
    read('gamePlayers', { game, code }).forEach((player) => {
      remove('gamePlayers', { uuid: player.uuid })
    })
  }
}

/* Set up the current auth instance from the Local DB 🍪 */
try {
  auth.users = read('gamePlayers')
} catch (e) {
  console.log(e)
}
