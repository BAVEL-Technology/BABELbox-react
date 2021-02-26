const GameButton = (props) => {
    return (
        <div className="game-button">
            <button className={props.classes} onClick={()=>{window.location=props.location;}}>
                <div className={`emoji`}>
                    <img draggable="false" className="emoji" src={props.src} />
                </div>
                <p className="font-extrabold game-button-p mx-5">{props.name}</p> 
            </button>
        </div>
    );
};

export default GameButton;