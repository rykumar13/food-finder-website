import React, { useState, useEffect } from "react";

import "./Restaurants.css";

import { getRestaurants } from "../../chatbot/data/data";

const Restaurant = ({ cuisineType, categoryType, latitude, longitude, count }) => {
  const [currentRestaurant, setCurrentRestaurant] = useState(null);

  useEffect(() => {
    const getRestaurantss = async () => {
      let restaurantList = await getRestaurants(
        cuisineType,
        categoryType,
        latitude,
        longitude
      );
      if (restaurantList) return setCurrentRestaurant(restaurantList);
      setCurrentRestaurant("no restaurants found");
    };
    getRestaurantss();
  }, [cuisineType, categoryType, latitude, longitude]);

  const renderRestaurant = () => {
    return (
      <li className="restaurant-widget-list-item" key={1}>
        {currentRestaurant[count]}
      </li>
    );
  };

  if (!currentRestaurant) return null;

  return (
    <div className="restaurants-widget">
      <ul className="restaurants-widget-list">{renderRestaurant()}</ul>
    </div>
  );
};

export default Restaurant;
