import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import Cart from "./components/cart/cart.jsx";
import CartDemo from "./components/cart/demo.jsx";
import AcceptButtonDemo from "./components/accept-button/demo.jsx";
import DeleteButtonDemo from "./components/delete-button/demo.jsx";
import CancelButtonDemo from "./components/cancel-button/demo.jsx";

function App() {
  const [bearValue, setBearValue] = useState(0);

  function MegaBear() {
    setBearValue(bearValue + 1);
    console.log("Bear value = " + bearValue);
  }

  return (
    <div className="App">
      <Cart onClick={MegaBear}>{bearValue}</Cart>
      <CartDemo></CartDemo>
      <DeleteButtonDemo></DeleteButtonDemo>
      <AcceptButtonDemo></AcceptButtonDemo>
      <CancelButtonDemo></CancelButtonDemo>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
