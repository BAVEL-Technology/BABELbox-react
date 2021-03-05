import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import io from "socket.io-client";
import { useGame } from "games/LiarLiar/BabelBuilder/GameContext";
import './Chat.css';

// const username = prompt("What is your name");

// add  "proxy": "http://localhost:3001", to package.json


const Chat = () => {
  const [chatOpen, setChatopen] = useState(false);
  const gameState = useGame();
  console.log(gameState);
  const username = gameState.players[0].name;
    const socketRef = useRef();
    const [messages, setMessages] = useState([]);
  const receivedMessage = (message) => {
    console.log(messages);
    setMessages([...messages, message]);}

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    // const [socket, setSocket] = useState(() => {
        //     return io("http://localhost:5000");
        // });
        
        useEffect(() => {
        socketRef.current = io("https://babelboxdb.herokuapp.com/");
        //captures event from server
        socketRef.current.on("connect", () => {
            console.log(username);
            socketRef.current.emit('room', "603d63927c61750021fe872a");
            socketRef.current.emit("new-user", username);
        });
    
            socketRef.current.on("message", data => {
                console.log(data);
            });
        //adds each new user to the existing users array
        socketRef.current.on("start", user => {
            console.log(users);
            setUsers(users => [...users, user]);
        });
        socketRef.current.on('chat message', (msg) => {
          console.log(messages);
          setMessages([...messages, msg]);
        });
    
        socketRef.current.on('disconnect', id => {
            socketRef.current.emit("user-left");
            setUsers(users => {
                return users.filter(user => user.id !== id);
            });
        });

        return () => {
            socketRef.current.disconnect();
        };
        }, [messages]);

        const handleSend = () => {
            if(message){
                socketRef.current.emit('chat message', message);
                console.log("new msg");
                setMessage("");
            }
        };

        return (
            <div className="z-50 fixed bottom-12 right-12">
                <div className="flex justify-center items-center">
                  <div className={`bg-white rounded-full h-24 w-24 flex items-center justify-center text-babelBlue-500 ${chatOpen ? 'hidden' : 'nothing'}`} onClick={() => {setChatopen(!chatOpen)}}>C</div>
                    <div className={`w-80 h-96 bg-white rounded shadow-2xl ${chatOpen ? 'nothing' : 'hidden'}`}>
                        {/* Top Header */}
                        <nav className="w-full h-10 bg-babelBlue-800 rounded-tr rounded-tl flex justify-between items-center">
                            <div className="flex justify-center items-center"> <i className="mdi mdi-arrow-left font-normal text-gray-300 ml-1"></i> <img src="https://i.imgur.com/IAgGUYF.jpg" className="rounded-full ml-1" width="25" height="25" /> <span className="text-xs font-medium text-gray-300 ml-1">{username}</span></div>
                            <div className="flex items-center"> <i className="mdi mdi-video text-gray-300 mr-4"></i> <i className="mdi mdi-phone text-gray-300 mr-2"></i> <i className="mdi mdi-dots-vertical text-gray-300 mr-2"></i> </div>
                        </nav>
                        {/* Messages Map */}
                        <div className="overflow-auto px-1 py-1" style={{height: '19rem'}} id="journal-scroll">
                            {messages.map(({user, text}, index) => (<div className="flex items-center pr-10 mb-1" key={index}>
                              <span>{user?.name}:</span>
                              <span className="flex ml-1 h-auto bg-babelBlue-800 text-gray-200 text-xs font-normal rounded-full px-1 p-1 items-end" style={{fontSize: "10px"}}>{text}</span> </div>))}
                            <div className=" " id="chatmsg"></div>
                        </div>
                        {/* Input and Send Area */}
                        <div className="flex justify-between items-center p-1 ">
                            <div className="relative"> 
                              <input type="text" 
                                className="rounded-full pl-6 pr-12 py-2 focus:outline-none h-auto placeholder-gray-300 bg-babelBlue-800 text-white border-gray-300" 
                                style={{fontSize: "11px", width: "275px"}} 
                                placeholder="BabelChat..." 
                                id="typemsg" value={message} 
                                onKeyPress={event => event.key === 'Enter' ? handleSend(event) : null} 
                                onSubmit={handleSend} 
                                onChange={(event) => setMessage(event.target.value)} />
                            </div>

                            <div className="w-7 h-7 pr-1 rounded-full text-center items-center flex justify-center"> 
                              <button className="w-7 h-7 rounded-full text-center items-center flex justify-center focus:outline-none hover:bg-blue-300 hover:text-white" onClick={handleSend}> 
                              <svg
                                className="svg-inline--fa text-gray-400 hover:text-babelBlue-800 fa-paper-plane fa-w-16 w-7 h-7 py-1 mr-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="paper-plane"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
                                />
                              </svg>
                              </button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default Chat; 