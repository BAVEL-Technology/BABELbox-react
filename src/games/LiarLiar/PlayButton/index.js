import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

class index extends Component {
  render() {
    return (
      <div>
        <button className="my-2 cursor-pointer lg:h-24 md:h-24 lg:w-24 md:w-24 w-16 h-16 rounded-full bg-green-400 flex items-center justify-center text-gray-100 hover:text-green-400 hover:bg-gray-100 border-4 border-green-400">
          <FontAwesomeIcon icon={faPlay} />
        </button>
      </div>
    );
  }
}

export default index;
