import Lobby from "../../Lobby";
import LiarLiarContext from "../../utils/LiarLiarContext";
import UserCard from "games/LiarLiar/Components/UserCard";
import PortalCodeCard from "../../../../components/LobbyCards/PortalCodeCard";
import { useContext, useState, useEffect } from "react";
import bb from "../../../../utils/babelBread";
import { useGame } from "../../BabelBuilder/GameContext";
import { findCurrentUserIndex } from "../../utils/currentUserIndex"
import formatQuestion from "games/LiarLiar/utils/formatQuestion";
import ReactHtmlParser from 'react-html-parser';
import Timer from "games/LiarLiar/Components/Timer";

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
  // State for user input (answer)
  const [ userInput, setUserInput ] = useState("");
  const statement = `params.rounds.${gameState.rounds.length - 1}.answers`;
  console.log(gameState);
  const currentUserIndex = findCurrentUserIndex(gameState.players, gameState.currentUser);



  const onInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const submitAnswer = async () => {
    const response = await bb().push(
      "portals",
      { code: gameState.code },
      { [statement] : { user: gameState.currentUser, answer: userInput } }
    );

    setQuestionLock(gameState.rounds[ gameState.rounds.length - 1 ]?.answers?.filter((ans) => ans.id == gameState.currentUser));
  };

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

      <input
        id="user-answer"
        type="text"
        name="portal-name"
        className="bg-blue-400 p-2 rounded-lg apperance-none lg:text-3xl text-gray-100 placeholder-white md:text-2xl text-xl w-full"
        disabled={questionLock}
        onChange={onInputChange}
        value={userInput}
        placeholder={gameState?.rounds[gameState.rounds.length - 1]?.question?.suggestions.split(',')[0]}
      />

      <button
        id="submit-answer-button"
        disabled={questionLock}
        onClick={submitAnswer}
        className={`place-self-center my-12 bg-blue-400 h-12 text-gray-100 p-4 rounded-tl-xl
        rounded-br-xl rounded-tr rounded-bl flex items-center justify-center w-full
        lg:text-3xl md:text-2xl text-xl ${questionLock && 'opacity-40'}`}
      >
        Submit
      </button>
    </div>
  );
};

export default Questions;
