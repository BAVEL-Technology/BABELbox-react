import { PromiseProvider } from "mongoose";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import io from "socket.io-client";
import './Chat.css';

const username = prompt("What is your name");

// add  "proxy": "http://localhost:3001", to package.json


const Chat = (props) => {
    const socketRef = useRef();
    
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
            props.message(msg);
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
        }, [props.messages]);

        const handleSend = () => {
            if(message){
                socketRef.current.emit('chat message', message);
                console.log("new msg");
                setMessage("");
            }
        };

        return (
            <div>
                <div>
                    <h1>Hello {username}</h1>
                </div>
                <ul>
                    {props.messages.map(({user, text}, index) => (<li key={index}>{user?.name}: {text}</li>))}
                </ul>
                <input value={message} placeholder="type..." onKeyPress={event => event.key === 'Enter' ? handleSend(event) : null} type="text" onSubmit={handleSend} onChange={(event) => setMessage(event.target.value)} />
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