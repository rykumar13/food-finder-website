import React, { useState, useEffect } from "react";

import { getRestaurants } from "../../../chatbot/data/mock_response";

import "./OpeningHours1.css";

const OpeningHours1 = ({ cuisineType, categoryType, latitude, longitude }) => {
  const [OpeningHours1, setOpeningHours1] = useState(null);

  useEffect(() => {
    const getOpeningHours1 = async () => {
      let restaurantList = await getRestaurants(
        cuisineType,
        categoryType,
        latitude,
        longitude
      );
      if (restaurantList) return setOpeningHours1(restaurantList[0]["restaurant"]["timings"]);
      setOpeningHours1("sorry, no OpeningHours1 available.");
    };
    getOpeningHours1();
  }, [cuisineType, categoryType, latitude, longitude]);

  const renderOpeningHours1 = () => {
    return (
      <p className="OpeningHours1-widget-list-item" key={1}>
        {OpeningHours1}
      </p>
    );
  };

  if (!OpeningHours1) return null;

  return (
    <div className="OpeningHours1-widget">
      <ul className="OpeningHours1-widget-list">{renderOpeningHours1()}</ul>
    </div>
  );
};

export default OpeningHours1;
