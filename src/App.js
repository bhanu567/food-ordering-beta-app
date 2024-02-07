import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/UI/header";
import ReactPortal from "./components/Layout/ReactPortal";

function App() {
  return (
    <div>
      <Header></Header>
      {ReactDOM.createPortal(
        <ReactPortal></ReactPortal>,
        document.getElementById("react_portal")
        )}
    </div>
  );
}

export default App;
