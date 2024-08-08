import './chatBot.css';
import ChatForm from './ChatForm';
import OptionButtons from './OptionButtons';
import react, { useEffect, useState } from 'react';
import {IoMdSend}  from 'react-icons/io';
import {BiBot,BiUser} from 'react-icons/bi';

function Basic(){
    const [chat,setChat] = useState([]);
    const [inputMessage,setInputMessage] = useState('');
    const [botTyping,setbotTyping] = useState(false);
    const [userName, setUserName] = useState('');

    
   useEffect(()=>{
        console.log("called");
        const objDiv = document.getElementById('messageArea');
        objDiv.scrollTop = objDiv.scrollHeight;
    },[chat])

    const handleSubmit=(evt, submittedName)=>{
        evt.preventDefault();
        const request_temp = {sender : "user", sender_id : submittedName, msg : inputMessage};
        setChat(chat => [...chat, request_temp]);
        setbotTyping(true);
        setInputMessage('');
        setUserName(submittedName);
        rasaAPI(submittedName,inputMessage);    
    }

    const handleBotResponse = (name) => {
        const botMessage = `Hello, ${name}!`;
        const response_temp = { sender: "bot", msg: botMessage };
        setChat(chat => [...chat, response_temp]);
        setbotTyping(false);
      };

    const rasaAPI = async function handleClick(name,msg) {
        //chatData.push({sender : "user", sender_id : name, msg : msg});
        

          await fetch('http://localhost:5005/webhooks/rest/webhook', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'charset':'UTF-8',
            },
            credentials: "same-origin",
            body: JSON.stringify({ "sender": name, "message": msg }),
        })
        .then(response => response.json())
        .then((response) => {
            if(response){
                const temp = response[0];
                const recipient_id = temp["recipient_id"];
                const recipient_msg = temp["text"];        

                const response_temp = {sender: "bot", recipient_id : recipient_id, msg: recipient_msg};
                setChat(chat => [...chat, response_temp]);
                setbotTyping(false);
                setbotTyping(false)
                
               // scrollBottom();

            }
        }) 
    }

    const handleOptionSelected = (option) => {
        const request_temp = { sender: 'user', sender_id: userName, msg: option };
        setChat(chat => [...chat, request_temp]);
        setbotTyping(true);
        rasaAPI(userName, option);
      };

    console.log(chat);

    const stylecard = {
        maxWidth : '35rem',
        paddingLeft: '0px',
        paddingRight: '0px',
        borderRadius: '30px',
        backgroundColor: 'transparent',
        outline: 'none',
        // border: 'none',
    };

    const styleFooter = {
        display: botTyping ? 'block' : 'none',
      };
             
    const styleBody = {
        paddingTop : '10px',
        height: '30rem',
        overflowY: 'a',
        overflowX: 'hidden',      
    };

    return (
      <div>
        {/* <button onClick={()=>rasaAPI("shreyas","hi")}>Try this</button> */}
        

        <div className="container">
        <div className="row justify-content-center">
            
                <div className="card" style={stylecard}>
                    <ChatForm onSubmit={handleSubmit} />
                    
                    <div className="cardBody" id="messageArea" style={styleBody}>
                        
                        <div className="row msgarea">
                            {chat.map((user,key) => (
                                <div key={key}>
                                    {user.sender==='bot' ? (
                                            <div className= 'msgalignstart'>
                                                <BiBot className="botIcon"  /><h5 className="botmsg">{user.msg}</h5>
                                            </div>
                                        ) 
                                        :(
                                            <div className= 'msgalignend'>
                                                <h5 className="usermsg">{user.msg}</h5><BiUser className="userIcon" />
                                            </div>
                                        )
                                    }
                                </div>
                            ))}  
                        </div>
                    </div>
                    <div className="cardFooter text-white" style={styleFooter}>
                        <div className="row">
                            <form style={{display: 'flex'}} onSubmit={handleSubmit}>
                                
                            </form>
                        </div>
                    </div>
                </div>
            
        </div>
        </div>

        </div>
    );
}
  
export default Basic;
