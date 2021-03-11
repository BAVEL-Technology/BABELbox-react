import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const PortalCodeCard = (props) => {
  const [copied, setCopied] = useState(false);

  const copiedTimer = () => {
    setCopied(true);
    setTimeout(()=> {
      setCopied(false);
    }, 5000);
  }

  return (
    <div
      id="#cards-wrapper"
      className="h-full w-full"
    >
      <div
        className={`my-6 flex bg-babelYellow-500 items-center justify-center w-full text-gray-700 p-4 text-xl lg:text-4xl md:text-3xl text-center rounded-xl tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-2 ${props.background}`}
      >
        <p
          id={`portal-code ${props.portalCode}`}
          style={{ fontFamily: "Sniglet" }}
          className="p-4 flex-grow"
        >
          {props.portalCode}
        </p>

        <div className="text-sm self-start col-span-1">
          <div className="w-8 h-8 rounded-full text-gray-100 flex items-center justify-center pl-1 cursor-pointer">
            <CopyToClipboard
              text={props.portalCode}
              onCopy={() => copiedTimer()}
            >
              <FontAwesomeIcon className="w-24 h-24" icon={faCopy} />
            </CopyToClipboard>
          </div>
          {/* if copied is true, display a small div that alerts the user */}
          {copied ? <span className="clipConfirm absolute -mt-7 ml-5 py-2 px-3 w-auto tracking-wide bg-gray-100 text-pink-700 rounded-full shadow-lg font-semibold z-10 animate-bounce text-xl">Copied!</span> : null}
        </div>
      </div>
      <div
        className="absolute -mt-44 -ml-8 flex flex-col items-center"
        id="roundNum"
      >
        <p
          style={{ fontFamily: "Sniglet" }}
          className={`font-bold font-semibold text-xl tracking-wide lg:text-xl md:text-xl`}
        >
          ROUND
        </p>
        <p
          style={{ fontFamily: "Sniglet" }}
          className={`bg-red-500 text-xl px-4 py-2 lg:text-2xl md:text-2xl text-gray-100 font-bold h-10 lg:h-12 md:h-12 w-10 lg:w-12 md:w-12 rounded-full ${props.roundBackground}`}
        >
          {props.roundNum}
        </p>
      </div>
    </div>
  );
};

export default PortalCodeCard;
