import React, { Component } from "react";

class index extends Component {
  render() {
    return (
      <div className="w-full flex item-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-36 w-36"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            className="text-green-600"
            fill="currentColor"
          />
          <path
            className="text-gray-200"
            fill="currentColor"
            d="M15.51 11.14a1 1 0 0 1 0 1.72l-5 3A1 1 0 0 1 9 15V9a1 1 0 0 1 1.51-.86l5 3z"
          />
        </svg>
      </div>
    );
  }
}

export default index;
