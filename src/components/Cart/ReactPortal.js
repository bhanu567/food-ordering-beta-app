import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import "./ReactPortal.css";
import CartContext from "../../store/cart-context";

const Backdrop = (props) => {
  return <div id="backdropcss" onClick={props.displayCart}></div>;
};
const ListofItems = (props) => {
  const cartCtx = useContext(CartContext);
  const decreseItemInCartHandler = () => {
    cartCtx.decreseItemInCart(props.index);
  };
  const increseItemInCartHandler = () => {
    cartCtx.increseItemInCart(props.index);
  };
  return (
    <>
      <div id="overall">
        <div id="content">
          <div id="item_name">{props.item.name}</div>
          <div id="inner_contnt">
            <div id="item_price">$ {props.item.price}</div>
            <div id="item_count">X {props.item.count}</div>
          </div>
        </div>
        <div id="button_increase_decrease">
          <button id="button_decrease" onClick={decreseItemInCartHandler}>
            -
          </button>
          <button id="button_increase" onClick={increseItemInCartHandler}>
            +
          </button>
        </div>
      </div>
      <hr></hr>
    </>
  );
};
const BillSummary = (props) => {
  const cartCtx = useContext(CartContext);
  let totalPrice = 0;

  const Items = cartCtx.itemList.map((item, index) => {
    totalPrice += Number(item.price) * Number(item.count);
    return <ListofItems key={index} index={index} item={item}></ListofItems>;
  });
  return (
    <div id="portal">
      {Items}
      <h2 id="h2">
        <div>Total Amount</div>
        <div id="total_price">$ {Math.floor(totalPrice)}</div>
      </h2>
      <div id="button">
        <button id="close" onClick={props.displayCart}>
          Close
        </button>
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
