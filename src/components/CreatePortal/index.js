import React from "react";
import LiarLiar from "../../games/LiarLiar";
import BB from "../../utils/babelBread";

const CreateProtal = (props) => {
  const createPortal = async () => {
    const portalresults = await BB().add("portals", {
      params: { game: "LiarLiar", phase: "waiting", round: "1" },
    });
    console.log(portalresults);
    const nameresults = await BB().add("liar-liar-players", {
      name: "your name",
      portalId: portalresults._id,
    });
    console.log(nameresults);
  };

  return (
    <>
      <div
        className={`bg-${props.color} w-full flex flex-col text-gray-100 p-8 rounded-xl tracking-widest my-8 cursor-pointer`}
        style={{ fontFamily: props.font }}
      >
        <div
          id="user-area"
          className="w-full flex justify-center mt-8"
          style={{ fontFamily: props.font }}
        >
          <div className="w-full mx-6 relative">
            <input
              id="user-name"
              type="text"
              name="user-name"
              placeholder=" "
              className="block
                appearance-none focus:outline-none border-b-4 border-gray-100 w-full bg-transparent
                text-xl text-gray-100"
            />
            {/* <label
              htmlFor="user-name"
              className="duration-300 absolute left-0 top-0 mt-8 w-full
                    -top-10 -z-1 label lg:text-3xl md:text-3xl text-xl"
            > */}
            User name
            {/* </label> */}
          </div>
        </div>
      </div>
      <button
        id="create-user-button"
        onClick={createPortal}
        className="place-self-center
  my-4 bg-blue-400 h-12 text-gray-100 p-4 rounded-tl-xl rounded-br-xl rounded-tr
  rounded-bl flex items-center justify-center w-full lg:w-2/3 md:w-2/3 lg:text-3xl md:text-3xl text-xl border-4 border-blue-400
  hover:bg-gray-100 hover:text-blue-400"
        style={{ fontFamily: props.font }}
      >
        Create Portal
      </button>
    </>
  );
};

export default CreateProtal;
