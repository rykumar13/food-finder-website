import React from "react";

import "./SkipBtn.css";

const SkipBtn = (props) => {
  const SkipBtn = [
    {
      text: "Skip",
      handler: props.actionProvider.handleSkipBtn,
      id: 1,
    },
  ];

  const buttonsMarkup = SkipBtn.map((option) => (
    <button key={option.id} onClick={option.handler} className="SkipBtn-button">
      {option.text}
    </button>
  ));

  return <div className="SkipBtn-container">{buttonsMarkup}</div>;
};

export default SkipBtn;