import React, { useState, useEffect } from "react";

import "./Restaurants.css";

import { getRestaurants } from "../../chatbot/data/data";

const Restaurant = ({ cuisineType, 
  categoryType, 
  latitude, 
  longitude }) => {
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {

    const getRestaurantss = async () => {
      let restaurantList = await getRestaurants(cuisineType, categoryType, latitude, longitude)
      setCount(count + 1);



      if (restaurantList) return setCurrentRestaurant(restaurantList[1]);
      setCurrentRestaurant("no restaurants found");
    }
    getRestaurantss();
  }, [cuisineType, categoryType, latitude, longitude]);

  const renderRestaurant = () => {
      return (
        <li className="restaurant-widget-list-item" key={1}>
          {currentRestaurant}
        </li>
      );
  };

  return (
    <div className="restaurants-widget">
      <ul className="restaurants-widget-list">{renderRestaurant()}</ul>
    </div>
  );
};

export default Restaurant;
