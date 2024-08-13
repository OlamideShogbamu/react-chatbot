// import { createClientMessage } from "react-chatbot-kit";

import { getBottomNavigationActionUtilityClass } from "@mui/material";

class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };
  showSelectState = (name) => {
    this.addCounterToState(1);
    this.apiCall(null);
    const message = this.createChatBotMessage("Please select your state", {
      widget: "buttons",
    });
    this.addMessageToState(message);
  };
  enterName = (name) => {
    const message = this.createClientMessage(name);
    this.addMessageToState(message);
  };

  promptLogin = () => {
    const message = this.createChatBotMessage(
      "Hello ralph, welcome to GeoST4R chatbot. \n Get all the information you need while you deliver health services in this region.\n \n Please provide your credentials to continue."
    );
    this.addMessageToState(message);
  };
  apiCall = (name) => {
    console.log(name);
    const data = ["Gombe", "Kaduna", "Kano", "Lagos"];

    this.setState((prevState) => ({
      ...prevState,
      buttons: data,
    }));
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!",
      {
        widget: "javascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  addNameToState = (name) => {
    this.setState((prevState) => ({
      ...prevState,
      name: name,
    }));
  };
  addStateToState = (name) => {
    this.setState((prevState) => ({
      ...prevState,
      state: name,
    }));
  };
  addCounterToState = (name) => {
    this.setState((prevState) => ({
      ...prevState,
      counter: name == 1 ? prevState.counter + 1 : prevState.counter - 1,
    }));
  };
}
export default ActionProvider;
