import React from "react";

const index = (props) => {
  const users = props.users;
  const userScores = [];
  const userNames = [];
  try {
    if (users && users.length > 0) {
      users.forEach((user, index) => {
        userNames.push(<p key={index}>{user.name}</p>);
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

  return (
    <div
      className={`bg-blue-400 p-4 m-4 rounded-xl text-center ${
        props.className
      } ${props.hidden ? "hidden" : "nothing"}`}
      style={{ fontFamily: "Sniglet" }}
    >
      <h1 className="text-xl">Scores</h1>
      <div className="grid grid-cols-2">
        <div className="justify-self-center">{userNames}</div>
        <div className="justify-self-center">{userScores}</div>
      </div>
    </div>
  );
};

export default index;
