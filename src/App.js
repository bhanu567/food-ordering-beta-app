import React, { useState } from "react";
import Header from "./components/UI/header";
import ReactPortal from "./components/Cart/ReactPortal";
import AuthContext from "./store/auth-context";

function App() {
  const [displayCart, setDisplayCart] = useState(false);
  const [noOfItems, setNoOfItems] = useState(0);
  const [ItemListArray, setItemListArray] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);
  const increaseNoOfItemsInCartHandler = (itemName, itemPrice) => {
    setNoOfItems(noOfItems + 1);
    setItemListArray((prevItem) => {
      return [...prevItem, itemName];
    });
    setTotalPrice(TotalPrice + Number(itemPrice));
  };

  const OpenCart = () => {
    setDisplayCart(true);
  };
  const CloseCart = () => {
    setDisplayCart(false);
  };
  return (
    <AuthContext.Provider
      value={{
        noOfItemsInCart: noOfItems,
        itemList: ItemListArray,
        totalPrice: TotalPrice,
        increaseNoOfItemsInCart: increaseNoOfItemsInCartHandler,
      }}
    >
      {displayCart && <ReactPortal displayCart={CloseCart} />}
      <Header displayCart={OpenCart}></Header>
    </AuthContext.Provider>
  );
}

export default App;
