class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleGetStartedBtn = () => {
    // Ask question
    const message = this.createChatBotMessage(
      "What cuisine would you like to eat?"
    );
    this.addMessageToState(message);

    //Retrieve cuisine list
    var zomato = require("zomato-api");
    var client = zomato({
      userKey: "443cebb0c149559671b6093778226894",
    });
    client
      .getCuisines({ city_id: 70 })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  handleCategoryTypeDelivery = () => {
    const message = this.createChatBotMessage(
      "finding you a place, one moment..."
    );
    this.addMessageToState(message);
  };

  handleCategoryTypeTakeaway = () => {
    const message = this.createChatBotMessage("You have chosen Takeaway!");
    this.addMessageToState(message);
  };

  handleCategoryTypeDineOut = () => {
    const message = this.createChatBotMessage("You have chosen Dine-Out!");
    this.addMessageToState(message);
  };

  handleCuisineType = () => {
    const message = this.createChatBotMessage("Not a bad choice!", {
      widget: "categoryTypes",
    });
    this.addMessageToState(message);
  };

  todosHandler = () => {
    const message = this.createChatBotMessage("Here is your list", {
      widget: "todos",
    });
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
