import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import GetStartedBtn from "../components/Options/GetStartedBtn/GetStartedBtn";
import CategoryTypes from "../components/Options/CategoryTypes/CategoryTypes";
import CuisineTypes from "../components/Options/CuisineTypes/CuisineTypes";

import Restaurant1 from "../components/Restaurants/Restaurant1/Restaurant1";
import MenuSkipBtns1 from "../components/Options/MenuSkipBtns/MenuSkipBtns1/MenuSkipBtns1";
import Restaurant2 from "../components/Restaurants/Restaurant2/Restaurant2";
import MenuSkipBtns2 from "../components/Options/MenuSkipBtns/MenuSkipBtns2/MenuSkipBtns2";
import Restaurant3 from "../components/Restaurants/Restaurant3/Restaurant3";
import MenuSkipBtns3 from "../components/Options/MenuSkipBtns/MenuSkipBtns3/MenuSkipBtns3";
import Restaurant4 from "../components/Restaurants/Restaurant4/Restaurant4";
import MenuSkipBtns4 from "../components/Options/MenuSkipBtns/MenuSkipBtns4/MenuSkipBtns4";
import Restaurant5 from "../components/Restaurants/Restaurant5/Restaurant5";
import MenuSkipBtns5 from "../components/Options/MenuSkipBtns/MenuSkipBtns5/MenuSkipBtns5";

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
      widgetName: "MenuSkipBtns1",
      widgetFunc: (props) => <MenuSkipBtns1 {...props} />,
    },
    {
      widgetName: "MenuSkipBtns2",
      widgetFunc: (props) => <MenuSkipBtns2 {...props} />,
    },
    {
      widgetName: "MenuSkipBtns3",
      widgetFunc: (props) => <MenuSkipBtns3 {...props} />,
    },
    {
      widgetName: "MenuSkipBtns4",
      widgetFunc: (props) => <MenuSkipBtns4 {...props} />,
    },
    {
      widgetName: "MenuSkipBtns5",
      widgetFunc: (props) => <MenuSkipBtns5 {...props} />,
    },
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
      widgetName: "Restaurant1",
      widgetFunc: (props) => <Restaurant1 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "Restaurant2",
      widgetFunc: (props) => <Restaurant2 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "Restaurant3",
      widgetFunc: (props) => <Restaurant3 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "Restaurant4",
      widgetFunc: (props) => <Restaurant4 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "Restaurant5",
      widgetFunc: (props) => <Restaurant5 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
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
    longitude: 174.7626,
  }
};

export default config;
