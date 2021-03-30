import React from "react";
import HowToPlayCard from "./HowToPlayCard";
import GameTitle from "../GameTitle";

const HowToPlay = () => {
  return (
    <div className="flex flex-col w-full items-center min-h-screen bg-gradient-to-tl from-babelBlue-1000 via-babelBlue-900 to-babelCyan-700">
      <div
        className="h-full w-11/12 md:w-3/4 lg:w-1/3 rounded-xl p-4"
        style={{ fontFamily: "Sniglet" }}
      >
        <GameTitle
          className="font-bold w-full my-4 flex items-center justify-between text-yellow-600 p-4 lg:text-5xl md:text-5xl text-3xl text-center rounded-xl tracking-widest"
          name="Liar Liar"
        />
        {/* <div
          className={`my-6 flex items-center justify-center bg-babelYellow-700 w-full text-white p-4 font-semibold text-2xl lg:text-4xl md:text-3xl text-center rounded-xl tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-2`}
          style={{ fontFamily: "Sniglet" }}
        >
          <h1 className="p-4 flex-grow">
            {" "}
          </h1>
        </div> */}

        <div
          className={`my-6 flex-1 items-center justify-center bg-babelYellow-700 w-full text-white p-4 text-center rounded-xl tracking-widest shadow-lg`}
        >
          <p className="mt-2">
            {" "}
            There are three phases: Question, Answer, and Waiting
          </p>
          <HowToPlayCard
            color="green-600"
            type="Question Phase:"
            rule="You'll be given a piece of trivia with a missing word. Fill in the blank with the most convincing thing you can think of. The more people that guess your answer, the more points you get!"
          />
          <HowToPlayCard
            color="indigo-600"
            type="Answer Phase:"
            rule="Try to guess which answer is the actual, correct answer. If you guess correctly you get $100. If someone guesses your answer, you get $25!"
          />
          <HowToPlayCard
            color="pink-600"
            type="Waiting Phase:"
            rule="See all players and scores and change your name. Host has the ability to kick players or change the host. Host is also the person who will start the round."
          />
          <div className="my-6 flex items-center justify-center w-full text-white p-4 text-center rounded-xl tracking-widest">
            <a
              href="/liarliar"
              className="place-self-center mx-auto
              my-4 bg-blue-400 h-12 text-gray-100 p-4 rounded-tl-xl rounded-br-xl rounded-tr
              rounded-bl flex items-center justify-center lg:w-2/3 md:w-2/3 lg:text-3xl md:text-3xl text-xl border-4 border-blue-400
              hover:bg-gray-100 hover:text-blue-400 animate-bounce shadow-xl"
            >
              Play LiarLiar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
