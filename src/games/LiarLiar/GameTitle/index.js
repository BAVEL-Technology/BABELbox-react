import React, { Component } from "react";

class index extends Component {
  render(props) {
    // console.log(this.props);
    return (
          <button className={this.props.className}>
            <div className={`emoji`}>
              🤥
            </div>
            <p className="font-extrabold game-button-p ml-5">
              {this.props.name}
            </p>
          </button>
    );
  }
}

export default index;
