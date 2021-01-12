import React from "react";

import "./GetStartedBtn.css";
import { useEffect } from "react";

const GetStartedBtn = (props) => {
  const { setState } = props;
  const options = [
    {
      text: "Get Started!",
      handler: props.actionProvider.handleGetStartedBtn,
      id: 1,
    },
  ];

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const fiveFirstTodos = data.slice(0, 6);
  //       setState((state) => ({ ...state, todos: fiveFirstTodos }));
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=70", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "user-key": "443cebb0c149559671b6093778226894",
  //     },
  //   })
  //     .then((res) => res.json())
  //     // .then((data) => {
  //     //   setState((state) => ({ ...state, cuisines: data }));
  //     // })
  //     .then((data) => console.log(data));
  // }, []);
  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="GetStartedBtn-button"
    >
      {option.text}
    </button>
  ));

  return <div className="getStartedBtn-container">{buttonsMarkup}</div>;
};

export default GetStartedBtn;
