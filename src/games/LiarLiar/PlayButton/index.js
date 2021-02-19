import React, { Component } from "react";

class index extends Component {
  render() {
    return (
      <div>
        <button className="my-2 cursor-pointer lg:h-24 md:h-24 lg:w-24 md:w-24 w-16 h-16 rounded-full flex-green-400 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="icon-play"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              className="text-green-200"
              fill="currentColor"
            />
            <path
              className="text-green-600"
              fill="currentColor"
              d="M15.51 11.14a1 1 0 0 1 0 1.72l-5 3A1 1 0 0 1 9 15V9a1 1 0 0 1 1.51-.86l5 3z"
            />
          </svg>
        </button>
      </div>
    );
  }
}

export default index;
