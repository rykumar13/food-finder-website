import React from "react";

import "./MenuSkipBtns.css";

const MenuSkipBtns = (props) => {
  const MenuSkipBtns = [
    {
        text: "See Menu",
        handler: props.actionProvider.handleMenuBtn,
        id: 1,
      },
    {
      text: "Next Suggestion",
      handler: props.actionProvider.handleSkipBtn,
      id: 2,
    },
  ];

  const buttonsMarkup = MenuSkipBtns.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="MenuSkipBtns-button"
    >
      {option.text}
    </button>
  ));

  return <div className="MenuSkipBtns-container">{buttonsMarkup}</div>;
};

export default MenuSkipBtns;
