import { useState } from "react";

const Answer = (props) => {
  const { answerLock, setAnswerLock } = useState(false);

  return (
    <div
      className="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4"
      style="font-family: {{game.font}};"
    >
      <div className="w-full flex justify-center pb-6">
        <div id="timer" style={{ fontFamily: props.font }}></div>
      </div>

      <div
        className="text-center w-full flex items-center justify-center py-8 lg:text-4xl md:text-3xl text-xl"
        style={{ fontFamily: props.font }}
      ></div>

      <button
        disabled={answerLock}
        //   onClick="selectAnswer({{@root.currentUser.id}}, {{@root.round.id}}, {{user_id}})"
        className="answer place-self-center my-12 bg-blue-400 h-12 text-gray-100 p-4 rounded-xl flex
              items-center justify-center w-full lg:text-3xl md:text-2xl text-xl disabled:opacity-50"
      >
        {/* {{answer}} */}
      </button>

      <button
        disabled={answerLock == true}
        //   onClick="selectAnswer({{@root.currentUser.id}}, {{@root.round.id}})"
        className="answer place-self-center my-12 bg-blue-400 h-12 text-gray-100 p-6 rounded-xl flex
              items-center justify-center w-full lg:text-3xl md:text-2xl text-xl disabled:opacity-50"
      >
        {/* {{answer}} */}
      </button>
    </div>
  );
};

export default Answer;
