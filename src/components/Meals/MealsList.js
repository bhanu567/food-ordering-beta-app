import React, { useState, useContext } from "react";
import "./MealsList.css";
import AuthContext from "../../store/auth-context";

const MealsList = (props) => {
  const [count, setItem] = useState(0);
  const authCtx = useContext(AuthContext);

  const increaseItemHandler=()=>{
    setItem(count + 1);
    authCtx.increaseNoOfItemsInCart(props.meal.name, props.meal.price);
  }
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
        <button className="add_item" onClick={increaseItemHandler}>
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
