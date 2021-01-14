import React, { useEffect } from "react";

import "./Restaurant.css";

const Restaurant = ({
  cuisineType,
  categoryType,
  latitude,
  longitude,
  restaurants,
}) => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const fiveFirstTodos = data.slice(0, 6);
        setState((state) => ({ ...state, todos: fiveFirstTodos }));
      });
  }, []);

  useEffect(() => {
    
  }, []);

  console.log(cuisineType);
  console.log(categoryType);
  console.log(latitude);
  console.log(longitude);

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
