import React, { useEffect } from "react";

import "./Restaurant.css";

const Restaurant = (
  {
    cuisineType, 
    categoryType, 
    restaurants,

  }) => {

  console.log(cuisineType);
  console.log(categoryType);

  const renderRestaurant = () => {
    return restaurants.map((restaurant) => {
      return (
        <li className="restaurant-widget-list-item" key={restaurant.id}>
          {restaurant.title}
        </li>
      );
    });
  };

  return (
    <div className="restaurants-widget">
      <ul className="restaurants-widget-list">{renderRestaurant()}</ul>
    </div>
  );
};

export default Restaurant;
