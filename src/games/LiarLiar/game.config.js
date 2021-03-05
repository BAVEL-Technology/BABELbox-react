import uuid from "utils/uuid";
import Waiting from "./Phases/Waiting";
import Questions from "./Phases/Questions";
import Answer from "./Phases/Answer";

const getAvatar = () => {
  const avatars = ["🐵", "🦊", "🐨", "🐲", "🥸", "🤓", "🤖", "👺", "🤡"];
  return avatars[Math.floor(Math.random() * avatars.length)];
};

export const game = {
  title: 'LiarLiar',
  route: 'liarliar',
  description: 'The game where knowing the right answer, is only half the challenge.'
}

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

export const sets = {
  waiting: <Waiting key="Waiting"/>,
  question: <Questions key="Questions"/>,
  answer: <Answer key="Answer"/>
};

export const state = {
  _id: null,
  code: null,
  game: null,
  phase: null,
  players: null,
  rounds: []
}
