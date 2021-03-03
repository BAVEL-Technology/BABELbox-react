import React from "react";

const Modal = () => {
  return (
    <div id="modal" className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 bg-gray-800 bg-opacity-75">
        <div
          className="fixed inset-x-0 bottom-0 transition-opacity"
          aria-hidden="true"
        >
          <div className="absolute inset-x-0 bottom-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <p className="text-2xl text-center pt-4">Pick an avatar!</p>
          <div
            id="charecters"
            className="h-full flex-wrap flex items-center justify-center"
          >
            <p
              onclick=""
              className="m-4 flex flex-col justify-center items-center "
            >
              <span className="my-1 sm:text-2xl md:text-3xl lg:text-4xl rounded-full p-2 hover:bg-blue-100 cursor-pointer transform duration-150 hover:-translate-y-1">
                🐵
              </span>
              <span className="text-xl my-1">George</span>
            </p>
            <p className="m-4 flex flex-col justify-center items-center">
              <span className="my-1 sm:text-2xl md:text-3xl lg:text-4xl">
                🦊
              </span>
              <span className="text-xl my-1">Mr. Fox</span>
            </p>
            <p className="m-4 flex flex-col justify-center items-center">
              <span className="my-1 sm:text-2xl md:text-3xl lg:text-4xl">
                🐨
              </span>
              <span className="text-xl my-1">Sydney</span>
            </p>
            <p className="m-4 flex flex-col justify-center items-center">
              <span className="my-1 sm:text-2xl md:text-3xl lg:text-4xl">
                🐲
              </span>
              <span className="text-xl my-1">Mushu</span>
            </p>
            <p className="m-4 flex flex-col justify-center items-center">
              <span className="my-1 sm:text-2xl md:text-3xl lg:text-4xl">
                🥸
              </span>
              <span className="text-xl my-1">Sherlock</span>
            </p>
            <p className="m-4 flex flex-col justify-center items-center">
              <span className="my-1 sm:text-2xl md:text-3xl lg:text-4xl">
                🤓
              </span>
              <span className="text-xl my-1">Christian</span>
            </p>
            <p className="m-4 flex flex-col justify-center items-center">
              <span className="my-1 sm:text-2xl md:text-3xl lg:text-4xl">
                🤖
              </span>
              <span className="text-xl my-1">Bender</span>
            </p>
            <p className="m-4 flex flex-col justify-center items-center">
              <span className="my-1 sm:text-2xl md:text-3xl lg:text-4xl">
                👺
              </span>
              <span className="text-xl my-1">Oni</span>
            </p>
            <p className="m-4 flex flex-col justify-center items-center">
              <span className="my-1 sm:text-2xl md:text-3xl lg:text-4xl">
                🤡
              </span>
              <span className="text-xl my-1">Pennywise</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
