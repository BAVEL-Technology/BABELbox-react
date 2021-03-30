import React from "react";
import { useState } from "react";
import { useGame } from "../../../BabelBuilder/GameContext";
import bb from "utils/babelBread";

const QuestionInput = (props) => {
  // Custom hook for getting game state.
  const gameState = useGame();

  // State for user input (answer)
  const [userInput, setUserInput] = useState("");
  const statement = `params.rounds.${gameState.rounds.length - 1}.answers`;

  const onInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const submitAnswer = async () => {
    if (userInput) {
      await bb().push(
        "portals",
        { code: gameState.code },
        { [statement]: { user: gameState.currentUser, answer: userInput } }
      );
      props.questionLockObj.setQuestionLock(
        gameState.rounds[gameState.rounds.length - 1]?.answers?.filter(
          (ans) => ans.id == gameState.currentUser
        )
      );
    } else {
      console.log('You did not submit anything')
    }
  };
  return (
    <div>
      <input
        id="user-answer"
        type="text"
        name="portal-name"
        className={`bg-blue-400 p-2 rounded-lg apperance-none lg:text-3xl text-gray-100 placeholder-opacity-50 placeholder-gray-200 md:text-2xl text-xl w-full ${
          props.questionLockObj.questionLock && "opacity-40"
        }`}
        disabled={props.questionLockObj.questionLock}
        onChange={onInputChange}
        value={userInput}
        placeholder={'say something like...' +
          gameState?.rounds[
            gameState.rounds.length - 1
          ]?.question?.suggestions.split(",")[0]
        }
        onKeyPress={(event) =>
          event.key === "Enter" ? submitAnswer(event) : null
        }
      />

      <button
        id="submit-answer-button"
        disabled={props.questionLockObj.questionLock}
        onClick={submitAnswer}
        className={`place-self-center my-12 bg-blue-400 h-12 text-gray-100 p-4 rounded-tl-xl
      rounded-br-xl rounded-tr rounded-bl flex items-center justify-center w-full
      lg:text-3xl md:text-2xl text-xl ${
        props.questionLockObj.questionLock && "opacity-40"
      }`}
      >
        Submit
      </button>
    </div>
  );
};

export default QuestionInput;
