import React from "react";
import "./MealsList.css"
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
const MealsList = () => {
  const mealsList=Meals.map((meal, index) => {
    if(index !==3)
    return (
        <ul>
          <li>
            <b>{meal.name}</b>
          </li>
          <li><i>{meal.desc}</i></li>
          <li className="price">
            <b>${meal.price}</b>
          </li>
          <hr></hr>
        </ul>
      );
    else
    return (
        <ul>
          <li>
            <b>{meal.name}</b>
          </li>
          <li><i>{meal.desc}</i></li>
          <li className="price">
            <b>${meal.price}</b>
          </li>
        </ul>
      );
  });
  return <div className="mealsList">{mealsList}</div>;
};
export default MealsList;
