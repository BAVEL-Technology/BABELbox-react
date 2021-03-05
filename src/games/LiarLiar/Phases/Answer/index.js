import { useState } from "react";
import { contextType } from "react-copy-to-clipboard";
import { useGame } from "games/LiarLiar/BabelBuilder/GameContext";
import { findCurrentUserIndex } from "../../utils/currentUserIndex"
import bb from "utils/babelBread";

const Answer = (props) => {
  const gameState = useGame();
  // console.log(`GameState: ${JSON.stringify(gameState)}`);
  const currentUserIndex = findCurrentUserIndex(gameState.players, gameState.currentUser);
  console.log(currentUserIndex);
  const [ answerLock, setAnswerLock ] = useState(gameState.players[currentUserIndex].answerLock);
  console.log(gameState.players[currentUserIndex].answerLock);
  const statement = `params.players.${currentUserIndex}.answerLock`;
  const lockAnswer = () => {
    // console.log(`Current User Index: ${currentUserIndex}`);
    bb().edit("portals", { code: gameState.code }, { [statement]: true });
  };

  //TODO check if answer is correct
  //if correct give user point
  //if incorrect find user that wrote that answer, give that user points

  function selectAnswer(userID) {
    const user = findCurrentUserIndex(gameState.players, userID);
    const statement = `params.players.${user}.points`;
    const userPoints = gameState.players[user].points;
    bb().edit('portals', {code: gameState.code}, {[statement]: userPoints + 25 });
    lockAnswer();
  }

  const createButtons = (answersArray) => {
    return answersArray.map((answer, index)=> {
      return (
        <button
        key={index}
        disabled={answerLock}
        onClick={()=>{selectAnswer(answer.user)}}
        className={`answer place-self-center my-12 bg-blue-400 h-12 text-gray-100 p-4 rounded-xl flex items-center justify-center w-full lg:text-3xl md:text-2xl text-xl ${answerLock && 'opacity-40'}`}
      >
        {answer.answer}
      </button>
      )
    });
  }
  

  return (
    <div
      className="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4"
    >
      <div className="w-full flex justify-center pb-6">
        <div id="timer" style={{ fontFamily: props.font }}></div>
      </div>

      <div
        className="text-center w-full flex items-center justify-center py-8 lg:text-4xl md:text-3xl text-xl"
        style={{ fontFamily: props.font }}
      >{gameState.rounds[gameState.rounds.length - 1].question.question}</div>

      <div>
        {createButtons(gameState.rounds[gameState.rounds.length - 1].answers)}
      </div>
    </div>
  );
};

export default Answer;
