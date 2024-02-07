import React from "react";
import Navigation from "./navigation";
import mealsImage from "../assets/header_image.jpg"
import "./header.css"
import Summary from "./summary";

const Header = () => {
  return (
    <div >
      <Navigation></Navigation>
      <img className="mealsImage" src={mealsImage} alt="logo"></img>
      <Summary></Summary>
    </div>
  );
};
export default Header;
