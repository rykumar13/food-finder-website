import React from "react";

import "./NextRestartBtns5.css";

const NextRestartBtns5 = (props) => {
  const NextRestartBtns5 = [
    {
        text: "Next Suggestion",
        handler: props.actionProvider.handleSkipBtn5,
        id: 1,
      },
    {
      text: "Restart",
      handler: props.actionProvider.handleGetStartedBtn,
      id: 2,
    },
  ];

  const buttonsMarkup = NextRestartBtns5.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="NextRestartBtns5-button"
    >
      {option.text}
    </button>
  ));

  return <div className="NextRestartBtns5-container">{buttonsMarkup}</div>;
};

export default NextRestartBtns5;
