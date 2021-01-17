import React, { useState, useEffect } from "react";

import { getRestaurants } from "../../../chatbot/data/mock_response";

import "./ContactDetails1.css";

const ContactDetails1 = ({ cuisineType, categoryType, latitude, longitude }) => {
  const [ContactDetails1, setContactDetails1] = useState(null);

  useEffect(() => {
    const getContactDetails1 = async () => {
      let restaurantList = await getRestaurants(
        cuisineType,
        categoryType,
        latitude,
        longitude
      );
      if (restaurantList) return setContactDetails1(restaurantList[0]["restaurant"]["phone_numbers"]);
      setContactDetails1("sorry, no ContactDetails1 available.");
    };
    getContactDetails1();
  }, [cuisineType, categoryType, latitude, longitude]);

  const renderContactDetails1 = () => {
    return (
      <p className="ContactDetails1-widget-list-item" key={1}>
        {ContactDetails1}
      </p>
    );
  };

  if (!ContactDetails1) return null;

  return (
    <div className="ContactDetails1-widget">
      <ul className="ContactDetails1-widget-list">{renderContactDetails1()}</ul>
    </div>
  );
};

export default ContactDetails1;
