import React, { useState } from "react";
import Header from "./components/UI/header";
import ReactPortal from "./components/Cart/ReactPortal";

function App() {
  const [displayCart, setDisplayCart] = useState(false);
  const OpenCart = () => {
    setDisplayCart(true);
  };
  const CloseCart = () => {
    setDisplayCart(false);
  };
  return (
    <div>
      <Header displayCart={OpenCart}></Header>
      {displayCart && <ReactPortal displayCart={CloseCart}></ReactPortal>}
    </div>
  );
}

export default App;
