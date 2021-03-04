import React, { useContext } from "react";
import { contextType } from "react-copy-to-clipboard";
import Modal from "../Modal";
import LiarLiarContext from "../../games/LiarLiar/utils/LiarLiarContext";
import LiarLiarStage from "../../games/LiarLiar/utils/LiarLiarStage";
import bb from "../../../src/utils/babelBread";

const UserCard = (props) => {
  const context = useContext(LiarLiarContext);
  const stage = useContext(LiarLiarStage);

  // console.log(props);
  const changeEmoji = () => {
    // TODO: After MVP
    // <Modal />;
    // const avatars = ["🐵", "🦊", "🐨", "🐲", "🥸", "🤓", "🤖", "👺", "🤡"];
    // for (let i = 0; i < avatars.length; i++) {
    //   avatars[i];
    // }
  };

  const changeUserName = () => {
    // TODO: After MVP
  };
  const changeLeader = (userID) => {
    // TODO: After MVP
    //needs improvement
    console.log(context);
    const playerArray = context.liarLiarState.players;
    for (let i = 0; i < playerArray.length; i++) {
      if (playerArray[i].leader === true) {
        playerArray[i].leader = false;
      } else if (playerArray[i].id === userID) {
        playerArray[i].leader = true;
      }
    }
    console.log(playerArray);
  };

  const trashUser = (userID) => {
    // TODO: After MVP
  };

  return (
    <div
      className="card my-6 flex items-center justify-between bg-green-400 w-full text-gray-700 p-4 text-xl lg:text-4xl md:text-3xl text-center rounded-xl tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-2"
      style={{ fontFamily: "'Sniglet', cursive" }}
      key={props.key}
    >
      <div
        onClick={() => {
          changeEmoji();
        }}
        className="emoji cursor-pointer rounded-full hover:bg-blue-300 p-2"
      >
        {props.user.avatar}
      </div>
      {/* TODO: Change the 'ReadOnly' prop to false when used as an input field again. */}
      <input
        readOnly={true}
        onKeyUp={() => {
          changeUserName();
        }}
        type="text"
        id="user-name-change"
        value={props.user.name}
        className="appearance-none text-center bg-green-400 focus:outline-none"
      />
      <div className="flex flex-col text-sm justify-between">
        <div
          onClick={() => {
            changeLeader(props.user.id);
          }}
          className="make-leader w-8 h-8 rounded-full hover:bg-blue-300 flex items-center justify-center pl-1 cursor-pointer"
        >
          {/* needs improvement */}
          <svg
            className={`h-4 w-4 ${
              props.user.leader ? "text-yellow-500" : "text-purple-500"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div
          onClick={() => {
            trashUser("uuid");
          }}
          className="  hidden  w-8 h-8 rounded-full hover:bg-blue-300 user-trash flex items-center justify-center pl-1 cursor-pointer"
        >
          <span className="fa-stack fa-1x">
            <span className="text-red-500">
              <i className="fas fa-trash fa-stack-1x" aria-hidden="true"></i>
            </span>
            <span>
              <i
                className="fas fa-trash-alt fa-stack-1x"
                aria-hidden="true"
              ></i>
            </span>
          </span>
        </div>
      </div>
      <div className="user-points text-sm p-2 text-green-200 bg-green-600 h-8 rounded absolute -top-4 -right-4">
        {props.user.points}
      </div>
    </div>
  );
};

export default UserCard;
