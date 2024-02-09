import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import "./ReactPortal.css";
import AuthContext from "../../store/auth-context";

const Backdrop = (props) => {
  return <div id="backdrop" onClick={props.displayCart}></div>;
}
const BillSummary = (props) => {
  const authCtx = useContext(AuthContext);
  const ListofItems = authCtx.itemList.map((itemName)=><h3>{itemName}</h3>)
  return (
    <div id="portal">
      {ListofItems}
      <h2 id="h2">
        <div>Total Amount</div>
        <div>$ {authCtx.totalPrice}</div>
      </h2>
      <div id="button">
        <button id="close" onClick={props.displayCart}>Close</button>
        <button id="order">Order</button>
      </div>
    </div>
  );
};
const ReactPortal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop displayCart={props.displayCart}></Backdrop>,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <BillSummary displayCart={props.displayCart}></BillSummary>,
        document.getElementById("react_portal")
      )}
    </Fragment>
  );
};
export default ReactPortal;
