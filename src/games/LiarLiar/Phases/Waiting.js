import LiarLiarContext from "../utils/LiarLiarContext";
import UserCard from "../Components/UserCard";
import PortalCodeCard from "../../../components/LobbyCards/PortalCodeCard";
import PlayButton from "../PlayButton";
import GameTitle from "../GameTitle";
import BBLogo from "../../../components/BBLogo";
import bb from "../../../utils/babelBread";
import { useState } from "react";
import { useGame } from "../BabelBuilder/GameContext";
import babelBellow from "utils/babelBellow";
import { findCurrentUserIndex } from "../utils/currentUserIndex";
import Scoreboard from "../Scoreboard";
import { useNavigation } from "react-navi";

const Waiting = () => {
  let navigation = useNavigation();
  const [scoreOpen, setScoreOpen] = useState(true);
  const gameState = useGame();
  const currentUserIndex = findCurrentUserIndex(
    gameState.players,
    gameState.currentUser
  );
  const userIndex = findCurrentUserIndex(
    gameState.players,
    gameState.currentUser
  );
  const navigation = useNavigation();

  console.log(`GameState: ${JSON.stringify(gameState)}`);
  if(!gameState.players[userIndex])
  {
    navigation.navigate('/liarliar/');
  }

  const isLeader = gameState.players[userIndex].leader;

  // Start a new round.
  const startRound = async () => {
    if (!isLeader) return;

    const question = await bb().browse("questions").random(); //Faster Random

    const portal = await bb().edit(
      "portals",
      { code: gameState.code },
      {
        "params.phase": "question",
      }
    );

    const newRound = await bb().push(
      "portals",
      { code: gameState.code },
      {
        "params.rounds": {
          round: gameState.rounds.length++,
          question: question,
          answers: [],
          questionStartTime: Date.now(),
          answerStartTime: Date.now() + 30000,
        },
      }
    );

    gameState.players.forEach((player, i) => {
      const statement = `params.players.${i}.answerLock`;
      bb().edit("portals", { code: gameState.code }, { [statement]: false });
    });

    babelBellow().emit("start timer", {
      function: `()=>{axios.put("https://babelboxdb.herokuapp.com/api/portals", {filters: {code: "${gameState.code}"} , updates: {'params.phase': 'answer'} });}`,
      time: 30000,
    });
    babelBellow().emit("start timer", {
      function: `()=>{axios.put("https://babelboxdb.herokuapp.com/api/portals", {filters: {code: "${gameState.code}"} , updates: {'params.phase': 'waiting'} });}`,
      time: 60000,
    });

    console.log(newRound);
  };

  return (
    <div className="w-full">
      {/* Game Title */}
      <GameTitle
        className="font-bold w-full my-4 flex items-center justify-between bg-babelBlue-600 text-yellow-600 p-4 lg:text-5xl md:text-5xl text-3xl text-center rounded-xl tracking-widest"
        name="Liar Liar"
      />

      {/* Scoreboard */}
      <Scoreboard hidden={!scoreOpen} users={gameState.players} />

      {/* Settings and Play Div */}
      <div className="flex justify-around w-full items-center">
        {/* Play Button */}
        <PlayButton onClick={startRound} />
        {/* Dynamically render the round in the center of the screen. */}
        {gameState.rounds.length > 0 ? (
          <div className="flex flex-col items-center justify-center space-y-2">
            <p
              style={{ fontFamily: "Sniglet" }}
              className={`bg-red-500 text-3xl px-4 py-2 flex items-center justify-center lg:text-3xl md:text-3xl text-gray-100 font-bold h-16 lg:h-16 md:h-16 w-16 lg:w-16 md:w-16 rounded-full bg-red-500`}
            >
              {gameState.rounds.length}
            </p>
            <p
              style={{ fontFamily: "Sniglet" }}
              className={`font-bold text-white font-semibold text-xl tracking-wide lg:text-xl md:text-xl`}
            >
              ROUND
            </p>
          </div>
        ) : null}
        {/* Settings Icon */}
        <div className="flex flex-col items-center justify-center space-y-2">
          {/* Settings Cog SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-16 w-16"
          >
            <path
              className="text-gray-400"
              fill="currentColor"
              d="M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
            />
            <circle
              cx="12"
              cy="12"
              r="2"
              fill="currentColor"
              className="text-gray-500"
            />
          </svg>
          {/* Settings text. */}
          <p
            style={{ fontFamily: "Sniglet" }}
            className={`font-bold text-center text-white font-semibold text-xl tracking-wide lg:text-xl md:text-xl`}
          >
            SETTINGS
          </p>
        </div>
      </div>

      <PortalCodeCard
        portalCode={gameState.code}
        roundNum={gameState.rounds.length}
      />

      <UserCard key="0" user={gameState.players[currentUserIndex]} />
      {gameState.players &&
        gameState.players.map((user, index) => {
          if (user.id != gameState.currentUser) {
            return <UserCard key={index + 1} user={{ ...user }} />;
          }
        })}
    </div>
  );
};

export default Waiting;
