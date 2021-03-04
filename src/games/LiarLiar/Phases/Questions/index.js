import Lobby from "../../Lobby";
import LiarLiarContext from "../../utils/LiarLiarContext";
import UserCard from "../../../../components/UserCard";
import PortalCodeCard from "../../../../components/LobbyCards/PortalCodeCard";
import { useContext, useState } from "react";
import bb from "../../../../utils/babelBread";
import { useGame } from "../../BabelBuilder/GameContext";
import { findCurrentUserIndex } from "../../utils/currentUserIndex"

const Questions = (props) => {
  const gameState = useGame();
  const [ questionLock, setQuestionLock ] = useState(false);
  const [ userInput, setUserInput ] = useState("");
  const statement = `params.rounds.${gameState.rounds.length}`;
  console.log(gameState)
  const currentUserIndex = findCurrentUserIndex(gameState.players, gameState.currentUser)
  setQuestionLock(gameState.rounds[ gameState.rounds.length ].answers.filter((ans) => id == currentUser))
    ? true
    : false;
  const onInputChange = (input) => {
    setUserInput(input);
  };

  const submitAnswer = async () => {
    bb().push(
      "portals",
      { code: gameState.code },
      { [statement]: { user: currentUser, answer: userInput } }
    );
  };

  //TODO check rounds for context
  // const context = useContext(Context);
  // const rounds = context.liarLiarState.rounds;
  const rounds = [
    {
      round: 0,
      question: {
        _id: "602f343d47920a0021c7cad8",
        category: "ice cream",
        question:
          "Ben and Jerry only started making ice cream because it was too expensive to make <BLANK>.",
        answer: "bagels",
        alternateAnswers: "bagles",
        suggestions:
          "cars, books, cake, video games, meals, dresses, pies, comic books, cupcakes, shoes, shoes, hats, movies, salad dressing, candy bars, opera glasses, whiskey, purses",
      },
    },
  ];

  return (
    <div className="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4">
      <div className="w-full flex justify-center pb-6">
        <div id="timer" style={{ fontFamily: props.font }}></div>
      </div>
      <div
        className=" text-center w-full flex items-center justify-center py-8 lg:text-4xl md:text-3xl text-xl"
        style={{ fontFamily: props.font }}
      >
        <p>{rounds[rounds.length - 1].question.question}</p>
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
