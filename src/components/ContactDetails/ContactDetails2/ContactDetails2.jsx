import React, { useState, useEffect } from "react";

import { getRestaurants } from "../../../chatbot/data/mock_response";

import "./ContactDetails2.css";

const ContactDetails2 = ({ cuisineType, categoryType, latitude, longitude }) => {
  const [ContactDetails2, setContactDetails2] = useState(null);

  useEffect(() => {
    const getContactDetails2 = async () => {
      let restaurantList = await getRestaurants(
        cuisineType,
        categoryType,
        latitude,
        longitude
      );
      if (restaurantList) return setContactDetails2(restaurantList[1]["restaurant"]["phone_numbers"]);
      setContactDetails2("sorry, no ContactDetails2 available.");
    };
    getContactDetails2();
  }, [cuisineType, categoryType, latitude, longitude]);

  const renderContactDetails2 = () => {
    return (
      <p className="ContactDetails2-widget-list-item" key={1}>
        {ContactDetails2}
      </p>
    );
  };

  if (!ContactDetails2) return null;

  return (
    <div className="ContactDetails2-widget">
      <ul className="ContactDetails2-widget-list">{renderContactDetails2()}</ul>
    </div>
  );
};

export default ContactDetails2;
