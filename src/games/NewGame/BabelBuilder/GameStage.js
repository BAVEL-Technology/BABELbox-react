import { useGame } from "./GameContext";

export function GameStage({ sets }) {
  const phase = useGame().phase
  return Object.keys(sets).map((a, index) => {
    if (phase == a) {
      // console.log(phase)
      return sets[a]
    } else {
      return this
    }
  })
};
