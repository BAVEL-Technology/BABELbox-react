import React from "react";

const Scoreboard = (props) => {
  const users = props.users;
  const userScores = [];
  const userNames = [];
  try {
    if (users && users.length > 0) {
      users.sort(compareScore);
      users.forEach((user, index) => {
        userNames.push(<p key={index}><span className="">{`${(index+1) + getPlace(index+1)}`}:</span> {`${user.name}`}</p>);
        userScores.push(
          <p className="text-emerald-600" key={index}>
            ${user.points}
          </p>
        );
      });
    }
  } catch (e) {
    console.error("Could not parse users. | " + e);
  }

  function compareScore (firstEl, secondEl) {
    if(firstEl.points > secondEl.points) return -1;
    if(firstEl.points < secondEl.points) return 1;
    if(firstEl.points == secondEl.points) return 0;
  }

  function getPlace (index)
  {
    if(index === 1) return 'st';
    if(index === 2) return 'nd';
    if(index === 3) return 'rd';
    return 'th';
  }

  return (
    <div className="flex items-center justify-center w-full ">
      <div
        className={`bg-blue-400 p-4 m-4 rounded-xl text-center w-full ${
          props.className
        } ${props.hidden ? "hidden" : "nothing"}`}
        style={{ fontFamily: "Sniglet" }}
      >
        <h1 className="text-xl">Scores</h1>
        <div className="grid grid-cols-2">
          <div className="justify-self-center text-xl">{userNames}</div>
          <div className="justify-self-center text-xl">{userScores}</div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
