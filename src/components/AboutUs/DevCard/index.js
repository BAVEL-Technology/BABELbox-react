import React, { useState, useEffect } from 'react';

const index = (props) => {
  const [returnedJSX, setReturnedJSX] = useState((<h1>Loading...</h1>));
  
  if(props.gitHubUsername && props.name)
  {
    // Use this to only render each card once.
    useEffect(()=>{
      // Get GitHub API
      fetch(`https://api.github.com/users/${props.gitHubUsername}`)
      .then((res) => {
        // Convert to JSON
        return res.json();
      })
      .then((res) => {
        const profilePic = res.avatar_url;
        const bio = res.bio;
        const gitHubURL = res.html_url;

        setReturnedJSX((
          <button className="bg-blue-300 p-6 m-4 rounded-2xl text-2xl" onClick={()=>{
            window.open(`${gitHubURL}`,"_blank");}}>
            <img src={profilePic} alt={props.gitHubUsername} className="rounded-full mb-4"/>
            <h1>{props.name}</h1>
            <p className="text-lg">{bio}</p>
          </button>
        ));
      });
    },[]);
    

    return returnedJSX;
  }
  else
  {
    // Return an error if proper info is not provided.
    return(
      <h1>Username not found.</h1>
    );
  }
  
};

export default index;
