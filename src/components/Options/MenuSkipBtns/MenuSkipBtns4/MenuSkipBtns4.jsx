import React from "react";

import "./MenuSkipBtns4.css";

const MenuSkipBtns4 = (props) => {
  const MenuSkipBtns4 = [
    {
        text: "See Menu",
        handler: props.actionProvider.handleMenuBtn4,
        id: 1,
      },
    {
      text: "Next Suggestion",
      handler: props.actionProvider.handleSkipBtn4,
      id: 2,
    },
  ];

  const buttonsMarkup = MenuSkipBtns4.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="MenuSkipBtns4-button"
    >
      {option.text}
    </button>
  ));

  return <div className="MenuSkipBtns4-container">{buttonsMarkup}</div>;
};

export default MenuSkipBtns4;
