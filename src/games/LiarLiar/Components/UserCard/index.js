import React, { useContext } from "react";
import bb from "utils/babelBread";
import { findCurrentUserIndex } from "games/LiarLiar/utils/currentUserIndex"
import { useGame } from "../../BabelBuilder/GameContext";

const UserCard = (props) => {
  const gameState = useGame();
  const userIndex = findCurrentUserIndex(gameState.players, gameState.currentUser);
  // console.log(props);
  const changeEmoji = () => {
    // TODO: After MVP
    // <Modal />;
    // const avatars = ["🐵", "🦊", "🐨", "🐲", "🥸", "🤓", "🤖", "👺", "🤡"];
    // for (let i = 0; i < avatars.length; i++) {
    //   avatars[i];
    // }
  };

  const changeUserName = (e) => {
    const statement = `params.players.${userIndex}.name`
    bb().edit('portals', { code: gameState.code }, { [statement]: e.target.value})
  };
  const changeLeader = async (userID) => {
    for (let i = 0; i < gameState.players.length; i++) {
      const statement = `params.players.${i}.leader`
      await bb().edit('portals', { code: gameState.code }, { [statement]: false })
    }
    const thisUserIndex = findCurrentUserIndex(gameState.players, userID)
    const statement = `params.players.${thisUserIndex}.leader`
    bb().edit('portals', { code: gameState.code }, { [statement]: true})
  };

  const trashUser = (userID) => {
    const newPlayersArray = gameState.players.filter((player) => player.id != userID)
    bb().edit('portals', { code: gameState.code }, {"params.players": newPlayersArray})
  };

  return (
    <div
      className="card my-6 flex items-center justify-between bg-green-400 w-full text-gray-700 p-4 text-xl lg:text-4xl md:text-3xl text-center rounded-xl tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-2"
      style={{ fontFamily: "'Sniglet', cursive" }}
    >
      <div
        onClick={() => {
          changeEmoji();
        }}
        className="emoji cursor-pointer rounded-full hover:bg-blue-300 p-2"
      >
        {props.user.avatar}
      </div>
      <input
        readOnly={props.user.id === gameState.currentUser ? false : true}
        onChange={changeUserName}
        type="text"
        id="user-name-change"
        value={props.user.name}
        className="appearance-none text-center bg-green-400 focus:outline-none"
      />
      <div className="flex flex-col text-sm justify-between">
        <div
          onClick={() => {
            if (gameState.players[userIndex].leader) changeLeader(props.user.id);
            else return false
          }}
          className="make-leader w-8 h-8 rounded-full hover:bg-blue-300 flex items-center justify-center pl-1 cursor-pointer"
        >
          {/* needs improvement */}
          <svg
            onClick={() => {
              if (gameState.players[userIndex].leader) changeLeader(props.user.id);
              else return false
            }}
            className={`h-4 w-4 text-yellow-500 ${
              props.user.leader ? "" : "hidden"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className={`h-4 w-4 text-blue-500 ${
            props.user.leader ? "hidden" : ""
          }`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <div
          onClick={() => {
            if (gameState.players[userIndex].leader && props.user.id != gameState.currentUser) trashUser(props.user.id);
            else return false
          }}
          className={`${gameState.players[userIndex].leader ? '' : 'hidden'} w-8 h-8 rounded-full hover:bg-blue-300 user-trash flex items-center justify-center pl-1 cursor-pointer`}
        >
        <svg className="h-4 w-4 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        </div>
      </div>
      <div className="user-points text-sm p-2 text-green-200 bg-green-600 h-8 rounded absolute -top-4 -right-4">
        ${props.user.points}
      </div>
    </div>
  );
};

export default UserCard;
