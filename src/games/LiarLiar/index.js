import React, { Component } from 'react';
import BBLogo from '../../components/BBLogo';
import Lobby from "./Lobby";

class LiarLiar extends Component {
  render() {
    return (
      <>
        <div className="position-absolute">
          <BBLogo small={true}/>
        </div>
        <Lobby/>
      </>
    );
  }
};

export default LiarLiar;
