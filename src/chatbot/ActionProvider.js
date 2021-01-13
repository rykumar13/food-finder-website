class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

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
      "handleCategoryTypeDelivery - finding you a place, one moment...",
      {
        widget: "restaurants",
      }
    );
    this.setState((state) => ({
      ...state,
      categoryType: "Delivery",
    }));
    this.addMessageToState(message);
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
