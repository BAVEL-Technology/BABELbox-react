import { useState } from "react";
import { contextType } from "react-copy-to-clipboard";

const Answer = (props) => {
  const currentUser = localStorage.getItem("liarLiarPlayer");
  const context = useContext(LiarLiarContext);
  const currentUserIndex = context.liarLiarState.players.indexOf(
    context.liarLiarState.players.filter(
      (player) => (player.id = currentUser)
    )[0]
  );
  const { answerLock, setAnswerLock } = useState(false);
  const statement = `params.players.${currentUserIndex}.answerLock`;
  const lockAnswer = async () => {
    bb().edit("portals", { code: CODE }, { [statement]: true });
  };

  //TODO check if answer is correct
  //if correct give user point
  //if incorrect find user that wrote that answer, give that user points

  setAnswerLock = context.liarLiarState.players[currentUserIndex].answerLock;
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
      answers: [
        {
          user: "5478ohgs8y4",
          answer: "Butt munch",
        },
      ],
    },
  ];

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
        onClick={}
        className="answer place-self-center my-12 bg-blue-400 h-12 text-gray-100 p-4 rounded-xl flex
              items-center justify-center w-full lg:text-3xl md:text-2xl text-xl disabled:opacity-50"
      >
        {rounds[rounds.length - 1].question.answer}
        {rounds[rounds.length - 1].answers}
      </button>
    </div>
  );
};

export default Answer;
