import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import BotAvatar from "./components/botAvatar";
import CustomizedInputBase from "./components/nameInput";

const App1 = () => {
  useEffect(() => {
    const checkExist = setInterval(() => {
      const targetElement = document.querySelector(
        ".react-chatbot-kit-chat-bot-avatar"
      );

      const targetElement2 = document.querySelector(
        ".react-chatbot-kit-chat-bot-message"
      );
      if (targetElement && targetElement2) {
        clearInterval(checkExist); // Stop checking when the element is found
        targetElement.innerHTML = "";
        // targetElement2.innerHTML = "";
        ReactDOM.render(<BotAvatar />, targetElement);
        // ReactDOM.render(<CustomizedInputBase />, targetElement);
      }
    }, 100); // Check every 100ms

    return () => clearInterval(checkExist); // Clean up
  }, []);

  return null;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App1 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
