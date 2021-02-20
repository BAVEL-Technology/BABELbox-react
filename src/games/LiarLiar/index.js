import React, { Component } from "react";
import Lobby from "./Lobby";
import Gateway from "../../components/Gateway";

class LiarLiar extends Component {
  render() {
    return (
      <>
        <Gateway />
        <Lobby />
      </>
    );
  }
}

export default LiarLiar;
