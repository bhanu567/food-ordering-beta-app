import React from "react";

const CartContext = React.createContext({
  noOfItemsInCart: 0,
  itemList: [],
  addItemsToCart: (x, y) => {},
  removeItemsFromCart: (index) => {},
  increseItemInCart: (index) => {},
  decreseItemInCart: (index) => {},
});
export default CartContext;
