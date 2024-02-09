import React, {useContext} from "react";
import AuthContext from "../../store/auth-context";
import "./navigation.css";
import icon from "../../assets/logo.svg";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <div className="main_header">
      <h1>
        <b>ReactMeals</b>
      </h1>
      <div className="rightIcon" onClick={props.displayCart}>
        <div className="innerdiv">
          <img className="icon" src={icon} alt="cart_logo"></img>
          <h4>Your Cart</h4>
          <div className="number_of_items">{authCtx.noOfItemsInCart}</div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
