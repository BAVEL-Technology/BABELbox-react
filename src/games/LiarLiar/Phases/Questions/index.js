import Lobby from "../../Lobby";
import LiarLiarContext from "../../utils/LiarLiarContext";
import UserCard from "../../../../components/UserCard";
import PortalCodeCard from "../../../../components/LobbyCards/PortalCodeCard";
import { useContext, useState, useEffect } from "react";
import bb from "../../../../utils/babelBread";
import { useGame } from "../../BabelBuilder/GameContext";
import { findCurrentUserIndex } from "../../utils/currentUserIndex"

const Questions = (props) => {
  // Custom hook for getting game state.
  const gameState = useGame();
  // Local lock for submitting a question. Sync this with db to keep value on refresh.
  const [ questionLock, setQuestionLock ] = useState(false);
  // State for user input (answer)
  const [ userInput, setUserInput ] = useState("");
  const statement = `params.rounds.${gameState.rounds.length - 1}`;
  console.log(gameState);
  const currentUserIndex = findCurrentUserIndex(gameState.players, gameState.currentUser)
<<<<<<< HEAD
  
=======
  setQuestionLock(gameState.rounds[gameState.rounds.length - 1]?.answers?.filter((ans) => id == currentUser))
    ? true
    : false;
>>>>>>> 5038b9b6b42ab83492b8a2971676ef353c1b328f
  const onInputChange = (input) => {
    setUserInput(input);
  };

  const submitAnswer = async () => {
    bb().push(
      "portals",
      { code: gameState.code },
      { [statement]: { user: gameState.currentUser, answer: userInput } }
    );

    setQuestionLock(gameState.rounds[ gameState.rounds.length - 1 ]?.answers?.filter((ans) => ans.id == currentUser));
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
        <p>{gameState.rounds[rounds.length - 1].question.question}</p>
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
      />

      <button
        id="submit-answer-button"
        onClick={submitAnswer}
        className="place-self-center my-12 bg-blue-400 h-12 text-gray-100 p-4 rounded-tl-xl
        rounded-br-xl rounded-tr rounded-bl flex items-center justify-center w-full
        lg:text-3xl md:text-2xl text-xl disabled:opacity-50"
        style={{ fontFamily: props.font }}
      >
        Submit
      </button>
    </div>
  );
};

export default Questions;
