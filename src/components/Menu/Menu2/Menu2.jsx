import React, { useState, useEffect } from "react";

import { getRestaurants } from "../../../chatbot/data/data";

import "./Menu.css";

const Menu2 = ({ cuisineType, categoryType, latitude, longitude }) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const getMenu = async () => {
      let restaurantList = await getRestaurants(
        cuisineType,
        categoryType,
        latitude,
        longitude
      );
      if (restaurantList) return setMenu(restaurantList);
      setMenu("sorry, no menu available.");
    };
    getMenu();
  }, [cuisineType, categoryType, latitude, longitude]);

  const renderMenu = () => {
    return (
      <p className="menu-widget-list-item" key={1}>
        {menu[1]["restaurant"]["menu_url"]}
      </p>
    );
  };

  if (!menu) return null;

  return (
    <div className="menu-widget">
      <ul className="menu-widget-list">{renderMenu()}</ul>
    </div>
  );
};

export default Menu2;
