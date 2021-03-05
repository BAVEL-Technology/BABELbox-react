import React from 'react';

const LiarLiarContext = React.createContext({
  _id: "",
  code: "",
  game: "",
  phase: "",
  players: [],
  rounds:[],
  // setLiarLiarState: () => {}
});

export default LiarLiarContext;
