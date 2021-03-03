import { create, read, update, add, remove, clear, drop } from "./localDB";
import babelBread from "./babelBread";

// A simple "authentication" service that just saves the
// user's name in a cookie.
export const authService = {
  async login({ game, code, id }) {
    try {
      const portal = await babelBread().read('portals', { code }).first()
      console.log(portal)
      if (!portal) return false
      if (read('gamePlayers', {game})) {
        read('gamePlayers', {game}).forEach((player) => {
          remove('gamePlayers', { uuid: player.uuid })
        })
      }
      create('gamePlayers', {game, user: id})
      this.users = read('gamePlayers')
      return true
    } catch (err) {
      console.log(err)
    }
  },
  getUsers() {
    return this.users
  },
  async authenticate({ game, code }) {
    const portal = await babelBread().read('portals', { code }).first()
    console.log(portal)
    if (portal.length < 1) return 401
    console.log(this.users)
    const user = this.users.filter((user) => user.game == game)
    if (!user) return 402
    const gameUser = portal.params.players.filter((player) => {
      console.log(player.id)
      console.log(user)
      return player.id == user[0].user
    })
    console.log(gameUser)
    if (gameUser.length < 1) {
      this.logout(game)
      return 403
    }
    return 200
  },
  logout({ game }) {
    if (read('gamePlayers', {game})) {
      read('gamePlayers', {game}).forEach((player) => {
        remove('gamePlayers', { uuid: player.uuid })
      })
    }
    this.users = read('gamePlayers')
    if (this.callback) {
      this.callback(undefined)
    }
  },
  subscribe(callback) {
    this.callback = callback
    return () => { this.callback = undefined }
  }
}




try {
  authService.users = read('gamePlayers')
  console.log(authService.users)
} catch (e) {
  console.log(e)
}

export { authService as auth }
