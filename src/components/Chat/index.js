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
            <div className="container">
                {/* <div> */}
                    <h1 className="text-center">Hello {username}</h1>
                    {/* <ul>
                        {props.messages.map(({user, text}, index) => (<div><li key={index}>{user?.name}: {text}</li></div>))}
                    </ul>
                    <input value={message} placeholder="type..." onKeyPress={event => event.key === 'Enter' ? handleSend(event) : null} type="text" onSubmit={handleSend} onChange={(event) => setMessage(event.target.value)} />
                    <button onClick={handleSend}>Send</button> */}
                {/* </div> */}

                {/* <div>
                    <h2>Whos here...</h2>
                    <ul>
                    {users.map(({ name, id }) => (
                        <li key={id}>{name}</li>
                        ))}
                        </ul>
                    </div> */}
{/* <div class="mx-auto max-w-screen-sm">
  <div class="space-y-4">

    <div class="flex">

      <div class="flex-1 border rounded-2xl px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
        <strong>{username}</strong> */}
                    {/* <ul> */}
                        {/* {props.messages.map(({user, text}, index) => (<div><li key={index}>{user?.name}: {text}</li></div>))} */}
                    {/* </ul> */}
                    {/* <input value={message} placeholder="type..." onKeyPress={event => event.key === 'Enter' ? handleSend(event) : null} type="text" onSubmit={handleSend} onChange={(event) => setMessage(event.target.value)} /> */}
                    {/* <button onClick={handleSend}>Send</button> */}
      {/* </div>
    </div>
  </div>
</div> */}
<div class="mt-20 mb-16">

{/* <!-- SINGLE MESSAGE --> */}
<div className="clearfix">
{props.messages.map(({user, text}, index) => (<div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-3xl" key={index}>{user?.name}: {text}</div>))}
  {/* <div
    className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg"
  >this is a basic mobile chat layout, build with tailwind css</div>
</div> */}

{/* <!-- SINGLE MESSAGE 2 --> */}
{/* <div class="clearfix">
  <div
    class="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix"
  >It will be used for a full tutorial about building a chat app with vue, tailwind and firebase.</div>
</div> */}

{/* <!-- SINGLE MESSAGE 3 --> */}
{/* <div class="clearfix">
  <div
    class="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix"
  >check my twitter to see when it will be released.</div>
</div> */}
</div>
    <div className="fixed w-full flex justify-between bg-green-100">
      <textarea
        className="flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
        rows="1"
        placeholder="Message..."
        value={message} onKeyPress={event => event.key === 'Enter' ? handleSend(event) : null} type="text" onSubmit={handleSend} onChange={(event) => setMessage(event.target.value)}
      ></textarea>
      <button onClick={handleSend} className="m-2">
        <svg
          className="svg-inline--fa text-green-400 fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2"
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



{/* <div class="h-screen bg-gray-300">
    <div class="flex justify-center items-center h-screen ">
        <div class="w-80 h-96 bg-white rounded shadow-2xl">
            <nav class="w-full h-10 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
                <div class="flex justify-center items-center"> <i class="mdi mdi-arrow-left font-normal text-gray-300 ml-1"></i> <img src="https://i.imgur.com/IAgGUYF.jpg" class="rounded-full ml-1" width="25" height="25" /> <span class="text-xs font-medium text-gray-300 ml-1">Alex cairo</span> </div>
                <div class="flex items-center"> <i class="mdi mdi-video text-gray-300 mr-4"></i> <i class="mdi mdi-phone text-gray-300 mr-2"></i> <i class="mdi mdi-dots-vertical text-gray-300 mr-2"></i> </div>
            </nav>
            <div class="overflow-auto px-1 py-1" style="height: 19rem;" id="journal-scroll">
                <div class="flex items-center pr-10"> <img src="https://i.imgur.com/IAgGUYF.jpg" class="rounded-full shadow-xl" width="15" height="15" style="box-shadow: " /> <span class="flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end" style="font-size: 10px;">Hi Dr.Hendrikson, I haven't been feeling well for past few days. <span class="text-gray-400 pl-1" style="font-size: 8px;">01:25am</span></span> </div>
                <div class="flex justify-end pt-2 pl-10"> <span class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end flex justify-end " style="font-size: 10px;">Lets jump on a video call. <span class="text-gray-400 pl-1" style="font-size: 8px;">02.30am</span></span> </div>
                <div class="flex justify-center"> <span class="text-gray-500 text-xs pt-4" style="font-size: 8px;">Call started at 02:33 am</span> </div>
                <div class="flex justify-center"> <span class="text-gray-500 text-xs" style="font-size: 8px;">Call ended at 02:33 am</span> </div>
                <div class="flex items-center pr-10 mt-1"> <img src="https://i.imgur.com/IAgGUYF.jpg" class="rounded-full shadow-xl" width="15" height="15" /> <span class="flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs p-1 font-normal rounded-sm px-1 items-end" style="font-size: 10px;">How often should i take the medicine? <span class="text-gray-400 pl-1" style="font-size: 8px;">01:25am</span></span> </div>
                <div class="flex justify-end pt-2 pl-10"> <span class="bg-green-900 h-auto text-gray-200 text-xs font-normal p-1 rounded-sm px-1 items-end flex justify-end " style="font-size: 10px;">Twice a day, at breakfast and before bed <span class="text-gray-400 pl-1" style="font-size: 8px;">02.30am</span></span> </div>
                <div class="flex items-center pr-10 pt-2"> <img src="https://i.imgur.com/IAgGUYF.jpg" class="rounded-full shadow-xl" width="15" height="15" /> <span class="flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end" style="font-size: 10px;">Thanks a lot doc<span class="text-gray-400 pl-1" style="font-size: 8px;">01:25am</span></span> </div>
                <div class="flex justify-end pt-2 pl-10"> <span class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end flex justify-end " style="font-size: 10px;">Thats my duty, mention not <span class="text-gray-400 pl-1" style="font-size: 8px;">02.30am</span></span> </div>
                <div class="flex items-center pr-10 pt-2"> <img src="https://i.imgur.com/IAgGUYF.jpg" class="rounded-full shadow-xl" width="15" height="15" /> <span class="flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end" style="font-size: 10px;">sorry to bother again but can i ask you one more favour?<span class="text-gray-400 pl-1" style="font-size: 8px;">01:25am</span></span> </div>
                <div class="flex justify-end pt-2 pl-10"> <span class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end flex justify-end " style="font-size: 10px;">yeah sure, go ahead?<span class="text-gray-400 pl-1" style="font-size: 8px;">02.30am</span></span> </div>
                <div class="flex items-center pr-10 pt-2"> <img src="https://i.imgur.com/IAgGUYF.jpg" class="rounded-full shadow-xl" width="15" height="15" /> <span class="flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end" style="font-size: 10px;">I really had a scary feeling about this, can please advice some tricks to overcome my anxiety?<span class="text-gray-400 pl-1" style="font-size: 8px;">01:25am</span></span> </div>
                <div class=" " id="chatmsg"> </div>
            </div>
            <div class="flex justify-between items-center p-1 ">
                <div class="relative"> <i class="mdi mdi-emoticon-excited-outline absolute top-1 left-1 text-gray-400" style="font-size: 17px !important;font-weight: bold;"></i> <input type="text" class="rounded-full pl-6 pr-12 py-2 focus:outline-none h-auto placeholder-gray-100 bg-gray-900 text-white" style="font-size: 11px;width: 250px;" placeholder="Type a message..." id="typemsg" /> <i class="mdi mdi-paperclip absolute right-8 top-1 transform -rotate-45 text-gray-400"></i> <i class="mdi mdi-camera absolute right-2 top-1 text-gray-400"></i> </div>
                <div class="w-7 h-7 rounded-full bg-blue-300 text-center items-center flex justify-center hover:bg-gray-900 hover:text-white"> <i class="mdi mdi-microphone "></i> </div>
                <div class="w-7 h-7 rounded-full bg-blue-300 text-center items-center flex justify-center"> <button class="w-7 h-7 rounded-full text-center items-center flex justify-center focus:outline-none hover:bg-gray-900 hover:text-white" onclick="sendbtn();"><i class="mdi mdi-send "></i></button> </div>
            </div>
        </div>
    </div>
</div> */}




            </div>
        );
};

export default Chat; 