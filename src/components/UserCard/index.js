const UserCard = (props) => {
  return (
    <div className="card my-6 flex items-center justify-between bg-green-400 w-full text-gray-700 p-4 text-xl lg:text-4xl md:text-3xl text-center rounded-xl tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-2" style={{fontFamily: "'Sniglet', cursive"}}>
      <div onClick="showAvatars(71)" className="emoji cursor-pointer rounded-full hover:bg-blue-300 p-2">props.avatar</div>
        <input onkeyup="changeUserName(71)" type="text" id="user-name-change" value={props.name} className="appearance-none text-center bg-green-400 focus:outline-none" />
      <div className="flex flex-col text-sm justify-between">
        <div onclick="makeLeader(71, 71)" className="make-leader w-8 h-8 rounded-full hover:bg-blue-300 flex items-center justify-center pl-1 cursor-pointer">
          <span className="fa-stack fa-1x user-leader">
              <span className=" text-yellow-500 gold-star"><i className="fas fa-star fa-stack-1x" ariaHidden="true"></i></span>
            <span><i className="far fa-star fa-stack-1x" ariaHidden="true"></i></span>
          </span>
        </div>
        <div onclick="deleteUser(event, 71)" className="  hidden  w-8 h-8 rounded-full hover:bg-blue-300 user-trash flex items-center justify-center pl-1 cursor-pointer">
          <span className="fa-stack fa-1x">
            <span className="text-red-500"><i className="fas fa-trash fa-stack-1x" ariaHidden="true"></i></span>
            <span><i className="fas fa-trash-alt fa-stack-1x" ariaHidden="true"></i></span>
          </span>
        </div>
      </div>
      <div className="user-points text-sm p-2 text-green-200 bg-green-600 h-8 rounded absolute -top-4 -right-4">$0</div>
    </div>
  );
};

export default UserCard;
