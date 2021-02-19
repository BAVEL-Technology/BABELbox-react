import React from 'react';

const LiarLiarContext = React.createContext({
  portalID: "",
  portalPhase: "",
  users: [],
  spectators: [],
  question: "",
  answers: [],
  round: 1
});

export default LiarLiarContext;