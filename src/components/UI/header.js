import React from "react";
import Navigation from "./navigation";
import mealsImage from "../../assets/header_image.jpg";
import "./header.css";
import Summary from "../Layout/summary";
import Meal from "../Meals/Meals";
const Header = (props) => {
  return (
    <>
      <Navigation displayCart={props.displayCart}></Navigation>
      <img className="mealsImage" src={mealsImage} alt="logo"></img>
      <Summary></Summary>
      <Meal></Meal>
    </>
  );
};
export default Header;
