import React from "react";
import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
import BotAvatar from "../components/botAvatar";
import CustomizedInputBase from "../components/nameInput";

const config = {
  // botName: "LearningBot",
  // initialMessages: [
  //   createChatBotMessage(`Hello. What do you want to learn`, {
  //     widget: "options",
  //   }),
  // ],
  initialMessages: [
    createChatBotMessage(`Hello. What's your name?`, { widget: "inputName" }),
  ],
  widgets: [
    {
      widgetName: "inputName",
      widgetFunc: (props) => (
        <CustomizedInputBase {...props} title="what is your title?" />
      ),
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
      // Defines an object of custon components that will replace the stock chatbot components

      customComponents: {
        // Replaces the default bot avatar

        botAvatar: (props) => <BotAvatar {...props} />,

        // Replaces the default bot chat nessage container

        // botChatMessage: (props) => <CustonChatMessage {...props} />,

        // Replaces the default user icon

        userAvatar: (props) => <></>,

        // Replaces the default user chat nessage

        // userChatMessage: (props) => <MyUserChatMessage {...prop} />
      },
    },
  ],
};

export default config;
