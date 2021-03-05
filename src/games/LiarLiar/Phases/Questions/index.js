import Lobby from "../../Lobby";
import LiarLiarContext from "../../utils/LiarLiarContext";
import UserCard from "games/LiarLiar/Components/UserCard";
import PortalCodeCard from "../../../../components/LobbyCards/PortalCodeCard";
import { useContext, useState, useEffect } from "react";
import bb from "../../../../utils/babelBread";
import { useGame } from "../../BabelBuilder/GameContext";
import { findCurrentUserIndex } from "../../utils/currentUserIndex"

const Questions = (props) => {
  // Custom hook for getting game state.
  const gameState = useGame();
  // Local lock for submitting a question. Sync this with db to keep value on refresh.
  const lockQuestionInputs = () => {
    if(!gameState.rounds[gameState.rounds.length - 1]?.answers) return false;
    if(!gameState.rounds[gameState.rounds.length - 1]?.answers?.filter((ans)=> {ans.user === gameState.currentUser }).length > 0) return true;

    return false;
  }
  const [ questionLock, setQuestionLock ] = useState(lockQuestionInputs());
  // State for user input (answer)
  const [ userInput, setUserInput ] = useState("");
  const statement = `params.rounds.${gameState.rounds.length - 1}.answers`;
  // console.log(gameState);
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
    <div className="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4">
      <div className="w-full flex justify-center pb-6">
        <div id="timer" style={{ fontFamily: props.font }}></div>
      </div>
      <div
        className=" text-center w-full flex items-center justify-center py-8 lg:text-4xl md:text-3xl text-xl"
        style={{ fontFamily: props.font }}
      >
        <p>{gameState?.rounds[gameState.rounds.length - 1]?.question?.question}</p>
      </div>

      <input
        id="user-answer"
        type="text"
        name="portal-name"
        className="block appearance-none focus:outline-none border-b-4 border-gray-700
        bg-transparent lg:text-3xl md:text-2xl text-xl text-gray-700 w-full"
        disabled={questionLock}
        style={{ fontFamily: props.font }}
        onChange={onInputChange}
        value={userInput}
      />

      <button
        id="submit-answer-button"
        disabled={questionLock}
        onClick={submitAnswer}
        className={`place-self-center my-12 bg-blue-400 h-12 text-gray-100 p-4 rounded-tl-xl
        rounded-br-xl rounded-tr rounded-bl flex items-center justify-center w-full
        lg:text-3xl md:text-2xl text-xl ${questionLock && 'opacity-40'}`}
        style={{ fontFamily: props.font }}
      >
        Submit
      </button>
    </div>
  );
};

export default Questions;
