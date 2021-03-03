import React, { useState } from 'react'
import { useNavigation } from 'react-navi'
import babelBread from "utils/babelBread"
import uuid from "utils/uuid"

export default function Join({ game, request, context }) {
  let [name, setName] = useState('Spartacus')

  // `useNavigation()` returns a navigation object
  let navigation = useNavigation()
  let handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const id = uuid()
      const user = await babelBread()
      .push('portals', { code: request.params.code }, { "params.players": {
          id,
          name: name,
          leader: false,
          avatar: "🐛",
          points: 0
        }
      })
      console.log(user)
      context.login({ game, code: request.params.code, user: id })
      console.log(context.getUsers())
      // You can then call `navigation.navigate()` to navigate to a new page.
      navigation.navigate('/liarliar/'+encodeURIComponent(request.params.code))
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Enter Name</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button>Ok</button>
    </form>
  )
}
