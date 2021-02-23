const GameButton = (props) => {
    return (
        <div className="game-button">
            <button className={props.classes} onClick={()=>{window.location=props.location;}}>
                <div className={`emoji`}>
                    <img draggable="false" class="emoji" src={props.src} />
                </div>
                <p className="font-extrabold game-button-p ml-5">{props.name}</p>
            </button>
        </div>
    );
};

export default GameButton;
