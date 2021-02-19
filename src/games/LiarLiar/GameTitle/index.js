import React, { Component } from "react";

class index extends Component {
  render(props) {
    console.log(this.props);
    return (
      <div>
        <div>
          <button className={this.props.classes}>
            <div className={`emoji`}>
              <img draggable="false" class="emoji" src={this.props.src} />
            </div>
            <p className="font-extrabold game-button-p ml-5">
              {this.props.name}
            </p>
          </button>
        </div>
      </div>
    );
  }
}

export default index;
