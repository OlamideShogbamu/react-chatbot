import "./App.css";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import Chatbot from "react-chatbot-kit";
import { useEffect } from "react";

function App() {
  const CustomChatBotStyles = () => {
    useEffect(() => {
      const checkExist = setInterval(() => {
        const firstMessage = document.querySelector(
          ".react-chatbot-kit-chat-bot-message"
        );

        if (firstMessage) {
          clearInterval(checkExist); // Stop checking when the element is found
          firstMessage.style.width = "300px";
        }
      }, 100); // Check every 100ms

      return () => clearInterval(checkExist); // Clean up the interval
    }, []);

    return null; // This component doesn't render anything
  };

  return (
    <>
      <CustomChatBotStyles />
      <div className="header">
        <h1 className="mh_space">GeoST4R Chatbot</h1>
        <span style={{ color: "rgb(149, 150, 147)", fontSize: "15px" }}>
          RMNCHN on-the-go field assistant
        </span>
      </div>

      <div className="App">
        <br />
        {/* <ChatForm /> */}
        <br />
        {/* <Basic /> */}

        <div className="App">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      </div>
    </>
  );
}

export default App;
