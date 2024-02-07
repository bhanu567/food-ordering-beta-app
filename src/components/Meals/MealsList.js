import React, { useState } from "react";
import "./MealsList.css";

const MealsList = (props) => {
  const [count, setItem] = useState(0);

  return (
    <ul>
      <li>
        <b>{props.meal.name}</b>
        <div className="righticon">
          <b>Amount</b>
          <div className="no_of_item">{count}</div>
        </div>
      </li>
      <li>
        <i>{props.meal.desc}</i>
        <button className="add_item" onClick={() => setItem(count + 1)}>
          +Add
        </button>
      </li>
      <li className="price">
        <b>${props.meal.price}</b>
      </li>
      <hr></hr>
    </ul>
  );
};
export default MealsList;
