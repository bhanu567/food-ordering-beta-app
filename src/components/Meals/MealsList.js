import React, { useState, useContext } from "react";
import "./MealsList.css";
import CartContext from "../../store/cart-context";

const MealsList = (props) => {
  const [count, setItem] = useState(0);
  const cartCtx = useContext(CartContext);

  const addItemHandler = () => {
    setItem(count + 1);
    cartCtx.addItemsToCart(props.index, props.meal);
  };
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
        <button className="add_item" onClick={addItemHandler}>
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
