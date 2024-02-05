import React from "react";
import Navigation from "./navigation";
import mealsImage from "../assets/header_image.jpg"
import "./header.css"


const Header = () => {
  return (
    <div >
      <Navigation></Navigation>
      <img className="mealsImage" src={mealsImage} alt="logo"></img>
    </div>
  );
};
export default Header;
