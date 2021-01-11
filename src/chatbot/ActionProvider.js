// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleGetStartedBtn = () => {
    const message = this.createChatBotMessage(
      "What cuisine would you like to eat?",
      {
        widget: "CuisineTypes"
      }
    );
    this.addMessageToState(message);
  };

  handleCategoryTypeDelivery = () => {
    const message = this.createChatBotMessage(
      "finding you a place, one moment...",
    );
    this.addMessageToState(message);
  };

  handleCategoryTypeTakeaway = () => {
    const message = this.createChatBotMessage(
      "You have chosen Takeaway!",
    );
    this.addMessageToState(message);
  };

  handleCategoryTypeDineOut = () => {
    const message = this.createChatBotMessage(
      "You have chosen Dine-Out!",
    );
    this.addMessageToState(message);
  };

  handleCuisineTypeChinese = () => {
    const message = this.createChatBotMessage(
      "Not a bad choice!",
      {
        widget: "categoryTypes"
      }
    );
    this.addMessageToState(message);
  };

  
  handleCuisineTypeThai = () => {
    const message = this.createChatBotMessage(
      "You have chosen Thai",
      {
        widget: "categoryTypes"
      }
    );
    this.addMessageToState(message);
  };

  handleCuisineTypeItalian = () => {
    const message = this.createChatBotMessage(
      "You have chosen Italian",
      {
        widget: "categoryTypes"
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
}

export default ActionProvider;
