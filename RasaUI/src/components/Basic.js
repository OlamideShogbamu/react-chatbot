import React, { useState } from 'react';
import ChatForm from './ChatForm';
import './chatBot.css';
import { BiBot, BiUser } from 'react-icons/bi';

function Basic() {
    const [chat, setChat] = useState([]);
    const [userName, setUserName] = useState('');
    const [chatStarted, setChatStarted] = useState(false);

    const handleBotResponse = (message) => {
        const botMessage = `Hello, ${message}!`;
        const responseTemp = { sender: "bot", msg: botMessage };
        setChat(chat => [...chat, responseTemp]);
    };

    const handleSubmit = (submittedName) => {
        if (userName) return; // Prevent re-submission

        setUserName(submittedName);
        setChatStarted(true);
        setChat(chat => [...chat, { sender: "user", msg: `My name is ${submittedName}` }]);
        handleBotResponse(submittedName);
    };

    return (
        <div className="stylecard">
            <div className="styleBody">
            {!chatStarted && 
                <div className="botmsg">
                  <BiBot className="botIcon" />
                  <ChatForm onSubmit={handleSubmit} />
                </div>}

                {chat.map((user, key) => (
                    <div key={key} className={`user ${user.sender}`}>
                        {user.sender === 'bot' ? (
                            <div className='msgalignstart'>
                                <BiBot className="botIcon" /><h5 className="botmsg">{user.msg}</h5>
                            </div>
                        ) : (
                            <div className='msgalignend'>
                                <h5 className="usermsg">{user.msg}</h5><BiUser className="userIcon" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Basic;
