import Lobby from "../../Lobby";
import LiarLiarContext from "../../utils/LiarLiarContext";
import UserCard from "games/LiarLiar/Components/UserCard";
import PortalCodeCard from "../../../../components/LobbyCards/PortalCodeCard";
import { useContext, useState, useEffect } from "react";
import { useGame } from "../../BabelBuilder/GameContext";
import { findCurrentUserIndex } from "../../utils/currentUserIndex"
import formatQuestion from "games/LiarLiar/utils/formatQuestion";
import ReactHtmlParser from 'react-html-parser';
import Timer from "games/LiarLiar/Components/Timer";
import QuestionInput from "./QuestionInput"

const Questions = (props) => {
  // Custom hook for getting game state.
  const gameState = useGame();
  // Local lock for submitting a question. Sync this with db to keep value on refresh.
  const lockQuestionInputs = () => {
    console.log(gameState.rounds[gameState.rounds.length - 1]?.answers)
    console.log(gameState.rounds[gameState.rounds.length - 1]?.answers?.filter((ans)=> {ans.user === gameState.currentUser }).length)
    if(!gameState.rounds[gameState.rounds.length - 1]?.answers) return false;
    if(gameState.rounds[gameState.rounds.length - 1]?.answers?.filter((ans)=> {ans.user === gameState.currentUser }).length > 0) return true;

    return false;
  }
  const [ questionLock, setQuestionLock ] = useState(lockQuestionInputs());





  return (
    <div className="font-sniglet">
      <div className="w-full flex justify-center pb-6">
        <Timer startTimeStamp={gameState.rounds[gameState.rounds.length - 1]?.questionStartTime}/>
      </div>
      <div
        className=" text-center w-full flex items-center justify-center py-8 lg:text-4xl md:text-3xl text-xl"
      >
        <p>
          {ReactHtmlParser (formatQuestion(gameState?.rounds[gameState.rounds.length - 1]?.question?.question))}
        </p>
      </div>
      <QuestionInput questionLockObj={{questionLock,setQuestionLock}}/>
    </div>
  );
};

export default Questions;
