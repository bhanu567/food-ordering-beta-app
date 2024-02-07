import React from "react";
import "./navigation.css";
import icon from "../../assets/logo.svg";

const Navigation = () => {
  return (
    <div className="main_header">
      <h1>
        <b>ReactMeals</b>
      </h1>
      <div className="rightIcon">
        <div className="innerdiv">
          <img className="icon" src={icon} alt="cart_logo"></img>
          <h2>Your Cart</h2>
          <div className="number_of_items">0</div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
