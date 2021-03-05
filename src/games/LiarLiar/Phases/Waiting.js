import LiarLiarContext from "../utils/LiarLiarContext";
import UserCard from "../Components/UserCard";
import PortalCodeCard from "../../../components/LobbyCards/PortalCodeCard";
import PlayButton from "../PlayButton";
import GameTitle from "../GameTitle";
import BBLogo from "../../../components/BBLogo";
import bb from "../../../utils/babelBread";
import { useGame } from "../BabelBuilder/GameContext";
import babelBellow from "utils/babelBellow";
import { findCurrentUserIndex } from "../utils/currentUserIndex"
const Waiting = () =>
{
  const gameState = useGame();
  const currentUserIndex = findCurrentUserIndex(gameState.players, gameState.currentUser);
  const startRound = async () => {
    const question = await bb().browse('questions').random(); //Faster Random

    const portal = await bb().edit('portals', { code: gameState.code }, {
      "params.phase": 'question'
    });

    const newRound = await bb().push('portals', { code: gameState.code }, {
      "params.rounds": {
        round: gameState.rounds.length++,
        question: question,
        answers: [],
        questionStartTime: Date.now(),
        answerStartTime: Date.now() + 30000
      }
    });

    gameState.players.forEach((player, i) => {
      const statement = `params.players.${i}.answerLock`
      bb().edit('portals', { code: gameState.code }, { [statement]: false })
    })

    babelBellow().emit('start timer', {
      function: `()=>{axios.put("https://babelboxdb.herokuapp.com/api/portals", {filters: {code: "${gameState.code}"} , updates: {'params.phase': 'answer'} });}`,
      time: 30000
    });
    babelBellow().emit('start timer', {
      function: `()=>{axios.put("https://babelboxdb.herokuapp.com/api/portals", {filters: {code: "${gameState.code}"} , updates: {'params.phase': 'waiting'} });}`,
      time: 60000
    });

    console.log(newRound);
  };



  return (
    <>
      <GameTitle
        className="font-bold w-full my-4 flex items-center justify-between bg-babelBlue-600 text-yellow-600 p-4 lg:text-5xl md:text-5xl text-3xl text-center rounded-xl tracking-widest"
        src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f925.png"
        name="Liar Liar"
      />
      <PlayButton onClick={startRound} />
      <PortalCodeCard portalCode={gameState.code} roundNum={gameState.rounds.length}/>
      <UserCard key="0" user={ gameState.players[currentUserIndex] }  />
      {gameState.players &&
        gameState.players.map((user, index) => {
          if (user.id != gameState.currentUser) {
            return <UserCard key={index + 1} user={{ ...user }}  />;
          }
        })}
    </>
  );
};

export default Waiting;
