import React, { Component } from "react";
import Lobby from "./Lobby";
import PlayButton from "./PlayButton";

class LiarLiar extends Component {
  render() {
    return (
      <>
        <Lobby />
        <PlayButton />
      </>
    );
  }
}

export default LiarLiar;
