class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleSkipBtn = () => {
    const message1 = this.createChatBotMessage("How about...", {
      widget: "restaurants",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("another suggestions?", {
      widget: "MenuSkipBtns",
    });
    this.addMessageToState(message2);
  };

  handleCuisineMatch = (cuisineId) => {
    const message = this.createChatBotMessage(
      `handleCuisineMatch - ${cuisineId}! not a bad choice.`,
      {
        widget: "categoryTypes",
      }
    );
    this.addMessageToState(message);
    this.setState((state) => ({
      ...state,
      cuisineType: cuisineId,
    }));
  };

  handleGetStartedBtn = () => {
    // Ask question
    const message = this.createChatBotMessage(
      "handleGetStartedBtn - What cuisine would you like to eat?"
    );
    this.addMessageToState(message);
  };

  handleCategoryTypeDelivery = () => {
    const message1 = this.createChatBotMessage(
      "finding you a place, one moment...",
      {
        widget: "restaurants",
      }
    );
    this.setState((state) => ({
      ...state,
      categoryType: "Delivery",
    }));
    this.addMessageToState(message1);

    const message2 = this.createChatBotMessage("another suggestions?", {
      widget: "MenuSkipBtns",
    });
    this.addMessageToState(message2);
  };

  handleCategoryTypeTakeaway = (categoryType) => {
    const message = this.createChatBotMessage(
      "handleCategoryTypeTakeaway - You have chosen Takeaway!",
      {
        widget: "restaurant",
      }
    );
    this.addMessageToState(message);
    this.setState((state) => ({
      ...state,
      categoryType: "Takeaway",
    }));
  };

  handleCategoryTypeDineOut = (categoryType) => {
    const message = this.createChatBotMessage(
      "handleCategoryTypeDineOut - You have chosen Dine-Out!",
      {
        widget: "restaurant",
      }
    );
    this.addMessageToState(message);
    this.setState((state) => ({
      ...state,
      categoryType: "Dine-out",
    }));
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
