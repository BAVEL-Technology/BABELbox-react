import Lobby from "../../Lobby";
import LiarLiarContext from "../../utils/LiarLiarContext";
import UserCard from "../../../../components/UserCard";
import PortalCodeCard from "../../../../components/LobbyCards/PortalCodeCard";
import { useState } from "react";
import bb from "../../../../utils/babelBread";

const Questions = (props) => {
  const { questionLock, setQuestionLock } = useState(false);

  //TODO check rounds for context
  const startRound = async (setLiarLiarState) => {
    const newRound = await bb().add("rounds", {
      round: round,
      questionStartTime: Date.now(),
      answerStartTime: Date.now() + 30000,
      portalId: portalId,
    });
  };

  // function next() {
  //     setTimeout(() => {
  //       window.location.href = `/{{game.url}}/{{portal.code}}/answer`
  //     }, 1000)
  //   }
  //   {{> liarliar/timer-script timeLimit=(countDown round.question_start_time 20) totalTime=20 strokeWidth='10px' }}
  //   document.querySelector('#user-answer').addEventListener('keypress', function (e) {
  //     if (e.key === 'Enter') {
  //       submitAnswer({{ currentUser.id }}, {{ round.id }}, {{ portal.id }})
  //     }
  //   });

  return (
    <div className="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4">
      <div className="w-full flex justify-center pb-6">
        <div id="timer" style={{ fontFamily: props.font }}></div>
      </div>
      <div
        className=" text-center w-full flex items-center justify-center py-8 lg:text-4xl md:text-3xl text-xl"
        style={{ fontFamily: props.font }}
      >
        This is where the question goes
      </div>

      <input
        id="user-answer"
        type="text"
        name="portal-name"
        className="block appearance-none focus:outline-none border-b-4 border-gray-700
        bg-transparent lg:text-3xl md:text-2xl text-xl text-gray-700 w-full"
        disabled={questionLock}
        style={{ fontFamily: props.font }}
      />

      <button
        id="submit-answer-button"
        onClick={startRound}
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
