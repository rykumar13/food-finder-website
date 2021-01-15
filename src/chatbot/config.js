import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import GetStartedBtn from "../components/Options/GetStartedBtn/GetStartedBtn";
import CategoryTypes from "../components/Options/CategoryTypes/CategoryTypes";
import CuisineTypes from "../components/Options/CuisineTypes/CuisineTypes";
import Restaurants from "../components/Restaurants/Restaurants";
import Todos from "../components/Todos/Todos";

const config = {
  botName: "FoodBot",
  initialMessages: [
    createChatBotMessage(
      `test - Hello I am FoodBot, here to help you find a place to eat!`,
      {
        widget: "GetStartedBtn",
      }
    ),
  ],
  widgets: [
    {
        widgetName: "CuisineTypes",
        widgetFunc: (props) => <CuisineTypes {...props} />,
        mapStateToProps: ["cuisineTypes"]
      },
    {
      widgetName: "GetStartedBtn",
      widgetFunc: (props) => <GetStartedBtn {...props} />,
      mapStateToProps: ["todos"]
    },
    {
      widgetName: "categoryTypes",
      widgetFunc: (props) => <CategoryTypes {...props} />,
      mapStateToProps: ["categoryType"]
    },
    {
      widgetName: "restaurants",
      widgetFunc: (props) => <Restaurants {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude"
      ]
    },
    {
      widgetName: "todos",
      widgetFunc: (props) => <Todos {...props} />,
      mapStateToProps: ["todos"]
    },
  ],
  state: {
    todos: [],
    cuisineType: "",
    categoryType: "",
    restaurants: [],
    latitude: -36.8483, 
    longitude: 174.7626
  }
};

export default config;
