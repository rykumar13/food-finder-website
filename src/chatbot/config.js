import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import GetStartedBtn from "../components/Options/GetStartedBtn/GetStartedBtn";
import CategoryTypes from "../components/Options/CategoryTypes/CategoryTypes";
import CuisineTypes from "../components/Options/CuisineTypes/CuisineTypes";
import Todos from "../components/Todos/Todos";

const config = {
  botName: "FoodBot",
  initialMessages: [
    createChatBotMessage(
      `Hello I am FoodBot, here to help you find a place to eat!`,
      {
        widget: "GetStartedBtn",
      }
    ),
  ],
  widgets: [
    {
        widgetName: "CuisineTypes",
        widgetFunc: (props) => <CuisineTypes {...props} />,
      },
    {
      widgetName: "GetStartedBtn",
      widgetFunc: (props) => <GetStartedBtn {...props} />,
      mapStateToProps: ["todos"]
    },
    {
      widgetName: "categoryTypes",
      widgetFunc: (props) => <CategoryTypes {...props} />,
    },
    {
      widgetName: "todos",
      widgetFunc: (props) => <Todos {...props} />,
      mapStateToProps: ["todos"]
    },
  ],
  state: {
    todos: [],
    cuisines: []
  }
};

export default config;
