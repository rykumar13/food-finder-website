// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (this.containsCuisineType(lowercase)) {
      this.actionProvider.handleCuisineMatch(lowercase);
    }

    if (lowercase.includes("todos")) {
      this.actionProvider.todosHandler();
    }
  }

  containsCuisineType = (message) => {
    const cuisines = ["chinese", "indian", "thai"]
    return cuisines.includes(message.toLowerCase());
  };
}

export default MessageParser;
