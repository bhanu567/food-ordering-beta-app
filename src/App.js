import React, { useState } from "react";
import Header from "./components/UI/header";
import ReactPortal from "./components/Cart/ReactPortal";
import CartContext from "./store/cart-context";

function App() {
  const [displayCart, setDisplayCart] = useState(false);
  const [noOfItems, setNoOfItems] = useState(0);
  const [ItemListArray, setItemListArray] = useState([]);

  const addItemCartHandler = (index, item) => {
    setNoOfItems(noOfItems + 1);
    setItemListArray((prevItems) => {
      for (let ind = 0; ind < prevItems.length; ind++) {
        if (prevItems[ind].id === index) {
          prevItems[ind].count += 1;
          return [...prevItems];
        }
      }
      const newItem = {
        id: index,
        name: item.name,
        count: 1,
        price: Math.floor(item.price),
      };
      return [...prevItems, newItem];
    });
  };
  const increaseCartHandler = (index) => {
    setNoOfItems(noOfItems + 1);
    setItemListArray((prevItems) => {
      prevItems[index].count += 1;
      return [...prevItems];
    });
  };
  const decreaseCartHandler = (index) => {
    setNoOfItems(noOfItems - 1);
    setItemListArray((prevItems) => {
      if (prevItems[index].count > 1) {
        prevItems[index].count -= 1;
        return [...prevItems];
      } else {
        const newListOfArray = prevItems.filter((item, ind) => ind !== index);
        return newListOfArray;
      }
    });
  };
  const deleteItemCartHandler = (index) => {};

  const OpenCart = () => {
    setDisplayCart(true);
  };
  const CloseCart = () => {
    setDisplayCart(false);
  };
  const cartContextValue = {
    noOfItemsInCart: noOfItems,
    itemList: ItemListArray,
    addItemsToCart: addItemCartHandler,
    removeItemsFromCart: deleteItemCartHandler,
    increseItemInCart: increaseCartHandler,
    decreseItemInCart: decreaseCartHandler,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {displayCart && <ReactPortal displayCart={CloseCart} />}
      <Header displayCart={OpenCart}></Header>
    </CartContext.Provider>
  );
}

export default App;
