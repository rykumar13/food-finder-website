import React from "react";
import Chatbot from "react-chatbot-kit";

import "./App.css";
import ActionProvider from "./chatbot/ActionProvider";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";

function App() {
  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };
  return (
    <div className="App">
      <div style={{ maxWidth: "300px" }}>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageHistory={loadMessages()}
          messageParser={MessageParser}
          saveMessages={saveMessages}
        />
      </div>
    </div>
  );
}

export default App;
