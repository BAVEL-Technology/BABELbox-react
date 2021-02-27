import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import io from "socket.io-client";
import './Chat.css';

const username = prompt('What is your name');

// add  "proxy": "http://localhost:3001", to package.json

const socket = io("http://localhost:5000", {
    transports: ["websocket", "polling"]
});

const Chat = ({}) => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

        //captures event from server
        useEffect(() => {
            socket.on("connect", () => {
                socket.emit("new-user", username);
                });

            //adds each new user to the existing users array
            socket.on("connected", user => {
                setUsers(users => [...users, user]);
            });

            //set users array 
            socket.on("users", users => {
                setUsers(users);
              });

            socket.on('chat message', (msg) => {
                console.log(msg);
                setMessages([...messages, msg]);
            });

            socket.on('disconnected', id => {
                setUsers(users => {
                    return users.filter(user => user.id !== id);
                });
            });

        }, [messages]);
        
        const handleSend = () => {
            socket.emit('chat message', message);
            console.log("new msg");
            setMessage("");
        };

        return (
            <div>
                <div>
                    <h1>Hello {username}</h1>
                </div>
                <ul>
                    {messages.map(({user, text}, index) => (<li key={index}>{user.name}: {text}</li>))}
                </ul>
                <input value={message} type="text" onSubmit={handleSend} onChange={(event) => setMessage(event.target.value)} />
                <button onClick={handleSend}>Send</button>

                {/* <div>
                    <h2>Whos here...</h2>
                    <ul>
                        {users.map(({ name, id }) => (
                            <li key={id}>{name}</li>
                        ))}
                    </ul>
                </div> */}
            </div>
        );
};

export default Chat; 