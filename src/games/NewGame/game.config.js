import uuid from "utils/uuid";

const getAvatar = () => {
  const avatars = ["🐵", "🦊", "🐨", "🐲", "🥸", "🤓", "🤖", "👺", "🤡"];
  return avatars[Math.floor(Math.random() * avatars.length)];
};

export const playerStructure = {
  id: uuid(),
  name: { input: true },
  leader: { initial: true, default: false },
  avatar: getAvatar(),
  points: 0,
  answerLock: false,
}

export const portalStructure = {
  phase: 'waiting',
  players: [],
  rounds: []
}
