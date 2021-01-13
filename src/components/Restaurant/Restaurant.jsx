import React, { useEffect } from "react";

import "./Restaurant.css";

const Restaurant = (props) => {
  const { setState } = props;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const fiveFirstTodos = data.slice(0, 6);
        console.log(fiveFirstTodos)
        const restaurant = [{id: 1, title:'rajiv'}, {id: 2, title:'rahul'}]
        setState((state) => ({ ...state, restaurants: restaurant }));
      });
  }, []);

  const renderRestaurant = () => {
    return props.restaurants.map((restaurant) => {
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
