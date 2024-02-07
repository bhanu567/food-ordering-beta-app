import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./ReactPortal.css";

const Backdrop = () => <div id="backdrop" ></div>;
const BillSummary = (props) => {
  return (
    <div id="portal">
      <h3>Sushi</h3>
      <h2 id="h2">
        <div>Total Amount</div>
        <div>$ 35.62</div>
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
        <Backdrop></Backdrop>,
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
