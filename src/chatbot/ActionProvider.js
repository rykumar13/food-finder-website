class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleSkipBtn1 = () => {
    const message1 = this.createChatBotMessage("How about...", {
      widget: "Restaurant2",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("another suggestions?", {
      widget: "MenuSkipBtns2",
    });
    this.addMessageToState(message2);
  };

  handleSkipBtn2 = () => {
    const message1 = this.createChatBotMessage("How about...", {
      widget: "Restaurant3",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("another suggestions?", {
      widget: "MenuSkipBtns3",
    });
    this.addMessageToState(message2);
  };

  handleSkipBtn3 = () => {
    const message1 = this.createChatBotMessage("How about...", {
      widget: "Restaurant4",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("another suggestions?", {
      widget: "MenuSkipBtns4",
    });
    this.addMessageToState(message2);
  };

  handleSkipBtn4 = () => {
    const message1 = this.createChatBotMessage("How about...", {
      widget: "Restaurant5",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("another suggestions?", {
      widget: "MenuSkipBtns5",
    });
    this.addMessageToState(message2);
  };

  handleSkipBtn5 = () => {
    const message1 = this.createChatBotMessage("How about...", {
      widget: "Restaurant1",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("another suggestions?", {
      widget: "MenuSkipBtns1",
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
        widget: "Restaurant1",
      }
    );
    this.setState((state) => ({
      ...state,
      categoryType: "Delivery",
    }));
    this.addMessageToState(message1);

    const message2 = this.createChatBotMessage("another suggestions?", {
      widget: "MenuSkipBtns1",
    });
    this.addMessageToState(message2);
  };

  handleCategoryTypeTakeaway = (categoryType) => {
    const message = this.createChatBotMessage(
      "handleCategoryTypeTakeaway - You have chosen Takeaway!",
      {
        widget: "Restaurant1",
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
        widget: "Restaurant1",
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
