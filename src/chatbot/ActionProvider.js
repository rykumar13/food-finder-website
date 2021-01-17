import { getRestaurants } from "./data/mock_response";
// C:\Users\rykum\web-dev\food-chatbot-website\src\chatbot\data\mock_response.js
// C:\Users\rykum\web-dev\food-chatbot-website\src\chatbot\ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleCategoryTypeDelivery = (state) => {
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

    const message2 = this.createChatBotMessage("see menu or next?", {
      widget: "MenuSkipBtns1",
    });
    this.addMessageToState(message2);
  };
  
  handleOpeningHrsBtn1 = () => {
    const message1 = this.createChatBotMessage("Opening hours...", {
      widget: "OpeningHours1",
    });
    this.addMessageToState(message1);
    const test = this.createClientMessage("Opening hours...", {
      widget: "OpeningHours1",
    });
    this.addMessageToState(test);
  }

  handleOpeningHrsBtn2 = () => {
    const message1 = this.createChatBotMessage("Opening hours...", {
      widget: "OpeningHours2",
    });
    this.addMessageToState(message1);
  }

  handleOpeningHrsBtn3 = () => {
    const message1 = this.createChatBotMessage("Opening hours...", {
      widget: "OpeningHours3",
    });
    this.addMessageToState(message1);
  }

  handleOpeningHrsBtn4 = () => {
    const message1 = this.createChatBotMessage("Opening hours...", {
      widget: "OpeningHours4",
    });
    this.addMessageToState(message1);
  }
  
  handleOpeningHrsBtn5 = () => {
    const message1 = this.createChatBotMessage("Opening hours...", {
      widget: "OpeningHours5",
    });
    this.addMessageToState(message1);
  }

  handleContactDetailsBtn1 = () => {
    const message1 = this.createChatBotMessage("Contact details...", {
      widget: "ContactDetails1",
    });
    this.addMessageToState(message1);
  }
  
  handleContactDetailsBtn2 = () => {
    const message1 = this.createChatBotMessage("Contact details...", {
      widget: "ContactDetails2",
    });
    this.addMessageToState(message1);
  }
  
  handleContactDetailsBtn3 = () => {
    const message1 = this.createChatBotMessage("Contact details...", {
      widget: "ContactDetails3",
    });
    this.addMessageToState(message1);
  }
  
  handleContactDetailsBtn4 = () => {
    const message1 = this.createChatBotMessage("Contact details...", {
      widget: "ContactDetails4",
    });
    this.addMessageToState(message1);
  }
  
  handleContactDetailsBtn5 = () => {
    const message1 = this.createChatBotMessage("Contact details...", {
      widget: "ContactDetails5",
    });
    this.addMessageToState(message1);
  } 

  handleMenuBtn1 = () => {
    const message1 = this.createChatBotMessage("Here is the menu...", {
      widget: "Menu1",
    });
    this.addMessageToState(message1);
    const message3 = this.createChatBotMessage("some more details...", {
      widget: "ContactHrsBtns1",
    });
    this.addMessageToState(message3);
    const message2 = this.createChatBotMessage("skip or restart?", {
      widget: "NextRestartBtns1",
    });
    this.addMessageToState(message2);
  };

  handleMenuBtn2 = () => {
    const message1 = this.createChatBotMessage("Here is the menu...", {
      widget: "Menu2",
    });
    this.addMessageToState(message1);
    const message3 = this.createChatBotMessage("some more details...", {
      widget: "ContactHrsBtns2",
    });
    this.addMessageToState(message3);
    const message2 = this.createChatBotMessage("skip or restart?", {
      widget: "NextRestartBtns2",
    });
    this.addMessageToState(message2);
  };

  handleMenuBtn3 = () => {
    const message1 = this.createChatBotMessage("Here is the menu...", {
      widget: "Menu3",
    });
    this.addMessageToState(message1);
    const message3 = this.createChatBotMessage("here are some more detai;s", {
      widget: "ContactHrsBtns3",
    });
    this.addMessageToState(message3);
    const message2 = this.createChatBotMessage("skip or restart?", {
      widget: "NextRestartBtns3",
    });
    this.addMessageToState(message2);
  };

  handleMenuBtn4 = () => {
    const message1 = this.createChatBotMessage("Here is the menu...", {
      widget: "Menu4",
    });
    this.addMessageToState(message1);
    const message3 = this.createChatBotMessage("some more details...", {
      widget: "ContactHrsBtns4",
    });
    this.addMessageToState(message3);
    const message2 = this.createChatBotMessage("skip or restart?", {
      widget: "NextRestartBtns4",
    });
    this.addMessageToState(message2);
  };

  handleMenuBtn5 = () => {
    const message1 = this.createChatBotMessage("Here is the menu...", {
      widget: "Menu5",
    });
    this.addMessageToState(message1);
    const message3 = this.createChatBotMessage("here are some more detai", {
      widget: "ContactHrsBtns5",
    });
    this.addMessageToState(message3);
    const message2 = this.createChatBotMessage("skip or restart?", {
      widget: "NextRestartBtns5",
    });
    this.addMessageToState(message2);
  };

  handleSkipBtn1 = () => {
    const message1 = this.createChatBotMessage("how about...", {
      widget: "Restaurant2",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("see menu or next?", {
      widget: "MenuSkipBtns2",
    });
    this.addMessageToState(message2);
  };

  handleSkipBtn2 = () => {
    const message1 = this.createChatBotMessage("how about...", {
      widget: "Restaurant3",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("see menu or next?", {
      widget: "MenuSkipBtns3",
    });
    this.addMessageToState(message2);
  };

  handleSkipBtn3 = () => {
    const message1 = this.createChatBotMessage("how about...", {
      widget: "Restaurant4",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("see menu or next?", {
      widget: "MenuSkipBtns4",
    });
    this.addMessageToState(message2);
  };

  handleSkipBtn4 = () => {
    const message1 = this.createChatBotMessage("how about...", {
      widget: "Restaurant5",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("see menu or next?", {
      widget: "MenuSkipBtns5",
    });
    this.addMessageToState(message2);
  };

  handleSkipBtn5 = () => {
    const message1 = this.createChatBotMessage("how about...", {
      widget: "Restaurant1",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("see menu or next?", {
      widget: "MenuSkipBtns1",
    });
    this.addMessageToState(message2);
  };

  handleCuisineMatch = (cuisineId) => {
    const message = this.createChatBotMessage(
      `${cuisineId}! not a bad choice.`,
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
    const message = this.createChatBotMessage(
      "What cuisine would you like?"
    );
    this.addMessageToState(message);
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
