import React, { useState, useEffect } from "react";

import { getRestaurants } from "../../../chatbot/data/mock_response";

import "./ContactDetails4.css";

const ContactDetails4 = ({ cuisineType, categoryType, latitude, longitude }) => {
  const [ContactDetails4, setContactDetails4] = useState(null);

  useEffect(() => {
    const getContactDetails4 = async () => {
      let restaurantList = await getRestaurants(
        cuisineType,
        categoryType,
        latitude,
        longitude
      );
      if (restaurantList) return setContactDetails4(restaurantList[3]["restaurant"]["phone_numbers"]);
      setContactDetails4("sorry, no ContactDetails4 available.");
    };
    getContactDetails4();
  }, [cuisineType, categoryType, latitude, longitude]);

  const renderContactDetails4 = () => {
    return (
      <p className="ContactDetails4-widget-list-item" key={1}>
        {ContactDetails4}
      </p>
    );
  };

  if (!ContactDetails4) return null;

  return (
    <div className="ContactDetails4-widget">
      <ul className="ContactDetails4-widget-list">{renderContactDetails4()}</ul>
    </div>
  );
};

export default ContactDetails4;
