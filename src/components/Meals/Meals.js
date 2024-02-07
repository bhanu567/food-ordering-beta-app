import React from "react";

import MealsList from "./MealsList";

const Meals = [
  {
    id: 1,
    name: "Sushi",
    desc: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    name: "Schnitzel",
    desc: "A german specialty",
    price: 16.5,
  },
  {
    id: 1,
    name: "Barbecue Burger",
    desc: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: 1,
    name: "Green Bowl",
    desc: "Healthy...and green...",
    price: 18.99,
  },
];
const Meal = () => {
  return (
    <div className="mealsList">
      {Meals.map((meal, index) => (
        <MealsList key={index} meal={meal}></MealsList>
      ))}
    </div>
  );
};
export default Meal;
