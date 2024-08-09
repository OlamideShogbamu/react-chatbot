import './chatBot.css';
import ChatForm from './ChatForm';
// import OptionButtons from './OptionButtons';
import React, { useEffect, useState } from 'react';
// import {IoMdSend}  from 'react-icons/io';
import {BiBot,BiUser} from 'react-icons/bi';

function Basic(){
    const [chat,setChat] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [botTyping,setbotTyping] = useState(false);
    const [userName, setUserName] = useState('');

    const handleBotResponse = (userName) => {
      const botMessage = `Hello, ${userName}!`;
      const responseTemp = { sender: "bot", msg: botMessage };
      setChat(chat => [...chat, responseTemp]);
      setbotTyping(false);
    };

    const handleSubmit=(submittedName) => {
        const requestTemp = {sender : "user", sender_id : submittedName, msg : inputMessage};
        setChat(chat => [...chat, requestTemp]);
        setbotTyping(true);
        setInputMessage('');
        setUserName(submittedName);

        handleBotResponse(submittedName);
        // rasaAPI(submittedName,inputMessage);    
    }

//     const rasaAPI = async function handleClick(name,msg) {
//         //chatData.push({sender : "user", sender_id : name, msg : msg});
        

//           await fetch('http://localhost:5005/webhooks/rest/webhook', {
//             method: 'POST',
//             headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json',
//               'charset':'UTF-8',
//             },
//             credentials: "same-origin",
//             body: JSON.stringify({ "sender": name, "message": msg }),
//         })
//         .then(response => response.json())
//         .then((response) => {
//             if(response){
//                 const temp = response[0];
//                 const recipient_id = temp["recipient_id"];
//                 const recipient_msg = temp["text"];        

//                 const response_temp = {sender: "bot", recipient_id : recipient_id, msg: recipient_msg};
//                 setChat(chat => [...chat, response_temp]);
//                 setbotTyping(false);
//                 setbotTyping(false)
                
//                // scrollBottom();

//             }
//         }) 
//     }

//     const handleOptionSelected = (option) => {
//         const request_temp = { sender: 'user', sender_id: userName, msg: option };
//         setChat(chat => [...chat, request_temp]);
//         setbotTyping(true);
//         rasaAPI(userName, option);
//       };

//     console.log(chat);

    return (      
                <div className="stylecard">
                    <div className="styleBody">
                            {chat.map((user,key) => (
                                <div key={key} className={`user ${user.sender}`}>
                                    {user.sender==='bot' ? (
                                            <div className= 'msgalignstart'>
                                                <BiBot className="botIcon"  /><h5 className="botmsg">{user.msg}</h5>
                                            </div>
                                        ) : (
                                            <div className= 'msgalignend'>
                                                <h5 className="usermsg">{user.msg}</h5><BiUser className="userIcon" />
                                            </div>
                                        )}
                                </div>
                            ))}  
                        </div>
                        <ChatForm onSubmit={handleSubmit} />
                    {/* <div className="styleFooter">
                        <div className="row">
                            <form style={{display: 'flex'}} onSubmit={handleSubmit}>
                                
                            </form>
                        </div>
                    </div> */}
                    
                </div>
    );
}
  
export default Basic;