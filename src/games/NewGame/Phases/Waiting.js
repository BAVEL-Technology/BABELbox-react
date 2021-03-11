import { useGame } from "../BabelBuilder/GameContext";
const Waiting = () =>
{
  const gameState = useGame();

  console.log(gameState)

  return (
    <div className="">
    <p> This is the Waiting Phase of your new Game!</p>
    <p> 'Remember if you want to view the gameState just "import"  useGame
    from /path/to/your/game/BabelBuilder/GameContext'</p>
    <p> 'If you want to update the gameState then "import"  useGameUpdate
    from /path/to/your/game/BabelBuilder/GameContext'</p>
    </div>
  );
};

export default Waiting;
