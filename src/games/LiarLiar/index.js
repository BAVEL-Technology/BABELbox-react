import React, { Component } from 'react';
import BBLogo from '../../components/BBLogo';
import Lobby from "./Lobby";
import PlayButton from "./PlayButton";
import GameTitle from "./GameTitle";

class LiarLiar extends Component {
  render() {
    return (
      <>
        <div className="position-absolute">
          <BBLogo small={true}/>
        </div>
        <Lobby/>
        
        <GameTitle
          classes="font-bold w-full my-4 flex items-center justify-around text-yellow-600 p-4 lg:text-5xl md:text-5xl text-3xl text-center rounded-xl tracking-widest"
          src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f925.png"
          name="Liar Liar"
        />
        {/* <PlayButton /> */}
      </>
    );
  }
}

export default LiarLiar;
