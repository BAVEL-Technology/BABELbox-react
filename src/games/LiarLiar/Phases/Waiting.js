import LiarLiarContext from "../utils/LiarLiarContext";
import UserCard from "../../../components/UserCard";
import PortalCodeCard from "../../../components/LobbyCards/PortalCodeCard";
import PlayButton from "../PlayButton";
import GameTitle from "../GameTitle";
import BBLogo from "../../../components/BBLogo";
import bb from "../../../utils/babelBread";
import { useContext } from "react";

const Waiting = () => {
  const context = useContext(LiarLiarContext);
  const startRound = async () => {
    console.log('hello');
    const question = await bb().browse('questions').random().question; //Faster Random
    console.log(question);
    const newRound = await bb().add("rounds", {
      round: context.liarLiarState.round,
      questionStartTime: Date.now(),
      answerStartTime: Date.now() + 30000,
      portalId: context.liarLiarState.portalID,
      question
    });
  };

  return (
    <LiarLiarContext.Consumer>
      {({ liarLiarState, setLiarLiarState }) => {
        return (
            <>
              <GameTitle
                className="font-bold w-full my-4 flex items-center justify-between bg-babelBlue-600 text-yellow-600 p-4 lg:text-5xl md:text-5xl text-3xl text-center rounded-xl tracking-widest"
                src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f925.png"
                name="Liar Liar"
              />
              <PlayButton onClick={startRound} />
              <PortalCodeCard portalCode={liarLiarState.portalID} />
              {liarLiarState.users &&
                liarLiarState.users.map((user, index) => {
                  return <UserCard user={{ ...user }} key={index + 1} />;
                })}
            </>
        );
      }}
    </LiarLiarContext.Consumer>
  );
};

export default Waiting;
