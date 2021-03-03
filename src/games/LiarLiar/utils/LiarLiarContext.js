import React from 'react';

const LiarLiarContext = React.createContext(
  {
    liarLiarState: {
      _id: "",
      code: "",
      game: "",
      phase: "",
      players: [],
      rounds:[],
    },
    setLiarLiarState: () => {}
  }
);

export default LiarLiarContext;
