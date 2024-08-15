import { fetchLgas, fetchWards } from './api'; // Assuming you have a fetchLgas method in your api file

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

  showSelectState = () => {
    const states = ['Lagos', 'Kaduna', 'Kano', 'Gombe'];
    const message = this.createChatBotMessage("Please select your state", {
      widget: "buttons",
      options: states.map((state) => ({ text: state, id: state })),
    });
    this.addMessageToState(message);
    this.setState((prevState) => ({
      ...prevState,
      buttons: states,
    }));
  };

  fetchLgasForState = async (stateName) => {
    try {
      const data = await fetchLgas(stateName);
      if (data.error) {
        const errorMessage = this.createChatBotMessage(`Error fetching LGAs: ${data.error}`);
        this.addMessageToState(errorMessage);
      } else {
        const lgaOptions = data.map(lga => ({ text: lga, id: lga }));
        const message = this.createChatBotMessage("Please select an LGA:", {
          widget: "buttons",
          options: lgaOptions,
        });
        this.addMessageToState(message);
        this.setState((prevState) => ({
          ...prevState,
          buttons: lgaOptions.map(option => option.text),
        }));
      }
    } catch (error) {
      console.error('Error fetching LGAs:', error);
      const errorMessage = this.createChatBotMessage("Sorry, there was an error fetching the LGAs. Please try again later.");
      this.addMessageToState(errorMessage);
    }
  };

  enterName = (name) => {
    const message = this.createClientMessage(name);
    this.addMessageToState(message);
    this.addNameToState(name); // Store the selected name in state
  };

  promptLogin = () => {
    const message = this.createChatBotMessage(
      "Hello Ralph, welcome to GeoST4R chatbot. \nGet all the information you need while you deliver health services in this region.\n\nPlease provide your credentials to continue."
    );
    this.addMessageToState(message);
  };

  fetchWardsForLga = async (lga_name) => {
    try {
      const data = await fetchWards(lga_name);
      if (data.error) {
        const errorMessage = this.createChatBotMessage(`Error fetching wards: ${data.error}`);
        this.addMessageToState(errorMessage);
      } else {
        const wardOptions = data.map(ward => ({ text: ward, id: ward }));
        const message = this.createChatBotMessage("Please select a ward:", {
          widget: "buttons",
          options: wardOptions,
        });
        this.addMessageToState(message);
      }
    } catch (error) {
      console.error('Error fetching wards:', error);
      const errorMessage = this.createChatBotMessage("Sorry, there was an error fetching the wards. Please try again later.");
      this.addMessageToState(errorMessage);
    }
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!",
      { widget: "javascriptQuiz" }
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
    this.setState((prevState) => ({ ...prevState, name }));
  };

  addStateToState = (stateName) => {
    this.setState((prevState) => ({ ...prevState, selectedState: stateName }));
    this.fetchLgasForState(stateName); // Fetch LGAs after the state is selected
  };

  incrementCounter = () => {
    this.setState((prevState) => ({
      ...prevState,
      counter: prevState.counter + 1,
    }));
  };
}

export default ActionProvider;
