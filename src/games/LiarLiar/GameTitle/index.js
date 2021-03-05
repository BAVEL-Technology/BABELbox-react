import React, { Component } from "react";
import Twemoji from 'react-twemoji';

class index extends Component {
  render(props) {
    // console.log(this.props);
    return (
          <button className={this.props.className}>
            <div className={`emoji`}>
              <Twemoji options={{ className: 'twemoji' }}>
                🤥
              </Twemoji>
            </div>
            <p className="font-semibold game-button-p ml-5">
              {this.props.name}
            </p>
          </button>
    );
  }
}

export default index;
