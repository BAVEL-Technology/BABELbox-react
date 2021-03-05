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
    if (userID === 'Roboto') {
      const statement = `params.players.${currentUserIndex}.points`;
      const userPoints = gameState.players[currentUserIndex].points;
      bb().edit('portals', {code: gameState.code}, {[statement]: userPoints + 100 });
    } else {
      const user = findCurrentUserIndex(gameState.players, userID);
      const statement = `params.players.${user}.points`;
      const userPoints = gameState.players[user].points;
      bb().edit('portals', {code: gameState.code}, {[statement]: userPoints + 25 });
    }
    lockAnswer();
  }

  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

  const createButtons = (answersArray) => {
    if (answersArray.filter((ans) => ans.user == 'Roboto').length < 1) {
      answersArray.push({
        user: "Roboto",
        answer: gameState.rounds[gameState.rounds.length - 1].question.answer
      })
    }
    shuffle(answersArray)
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
      className="font-sniglet"
    >
      <div className="w-full flex justify-center pb-6">
        <div id="timer"></div>
      </div>

      <div
        className="text-center w-full flex items-center justify-center py-8 lg:text-4xl md:text-3xl text-xl"
      >{gameState.rounds[gameState.rounds.length - 1].question.question}</div>

      <div>
        {createButtons(gameState.rounds[gameState.rounds.length - 1].answers)}
      </div>
    </div>
  );
};

export default Answer;
