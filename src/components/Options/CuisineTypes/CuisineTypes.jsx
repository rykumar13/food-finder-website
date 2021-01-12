import React from "react";

import "./CuisineTypes.css";

const CuisineTypes = (props) => {
  const CuisineTypes = [
    {
      text: "Chinese",
      handler: props.actionProvider.handleCuisineTypeChinese,
      id: 1,
    },
  ];

  const buttonsMarkup = CuisineTypes.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="categoryType-button"
    >
      {option.text}
    </button>
  ));

  return <div className="cuisineTypes-container">{buttonsMarkup}</div>;
};

export default CuisineTypes;
