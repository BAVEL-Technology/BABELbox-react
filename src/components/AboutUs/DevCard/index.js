import React, { useState, useEffect } from "react";

const index = (props) => {
  const [returnedJSX, setReturnedJSX] = useState(
    <div className="bg-blue-300 m-8 px-24 py-48">
      <h1>Loading...</h1>
    </div>
  );

  if (props.gitHubUsername && props.name) {
    // Use this to only render each card once.
    useEffect(() => {
      // Get GitHub API
      fetch(`https://api.github.com/users/${props.gitHubUsername}`)
        .then((res) => {
          // Convert to JSON
          return res.json();
        })
        .then((res) => {
          const profilePic = res.avatar_url;
          const bio = res.bio;
          const location = res.location;
          const gitHubURL = res.html_url;

          setReturnedJSX(
            <button
              className="bg-blue-300 hover:bg-blue-400 focus:bg-blue-400 shadow-2xl p-6 m-4 rounded-2xl text-2xl h-auto w-96"
              onClick={() => {
                window.open(`${gitHubURL}`, "_blank");
              }}
            >
                <img
                  src={profilePic}
                  alt={props.gitHubUsername}
                  className="rounded-full mb-4 h-72 w-72 mx-6 mt-0"
                />
                  <h1 className="text-4lg font-bold">{props.name}</h1>
                  <p className="text-base m-2 leading-6">{bio}</p>
                  <p className="text-lg m-2">{location}</p>
            </button>
          );
        });
    }, []);

    return returnedJSX;
  } else {
    // Return an error if proper info is not provided.
    return <h1>Username not found.</h1>;
  }
};

export default index;
