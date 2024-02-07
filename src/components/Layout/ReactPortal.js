import React from "react";
import "./ReactPortal.css";

const ReactPortal = () => {
  return (
    <div id="backdrop">
    <div className="portal">
      <h3>Sushi</h3>
      <h2 id="h2">
        <div>Total Amount</div>
        <div>35.62</div>
      </h2>
      <div id="button">
        <button id="close">Close</button>
        <button id="order">Order</button>
      </div>
    </div>
    </div>
  );
};
export default ReactPortal;
