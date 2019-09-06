import React, { useState } from "react";
import "./cart.css";

function Cart(props) {
  const [value, setValue] = useState(props.value);

  function display_text() {
    if (value <= 0) {
      return "";
    } else if (value > 9) {
      return "9+";
    } else {
      return value;
    }
  }

  return (
    <div className="cart-container" onClick={props.onClick}>
      <h1
        id="cart-text-holder"
        className={"text-green cart-text " + (value > 9 ? "cart-text-ten" : "")}
      >
        {display_text()}
      </h1>
      <p className={value > 9 ? "cart-tooltip" : "hidden"}>{props.value}</p>
    </div>
  );
}

export default Cart;
