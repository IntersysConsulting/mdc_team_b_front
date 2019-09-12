import React, { useState } from "react";
import "./cart.css";

const Cart = props => {
  return (
    <div className="cart-container" onClick={props.onClick}>
      <h1
        className={
          "text-green cart-text " + (props.isOverNine ? "cart-text-ten" : "")
        }
      >
        {props.displayText}
      </h1>
      <p className={props.isOverNine ? "cart-tooltip" : "hidden"}>
        {props.tooltipText}
      </p>
    </div>
  );
};

export default Cart;

// Legacy code

// const [cartState, setCartState] = useState({ value: props.value });

// const display_text = () => {
//   if (cartState.value <= 0) {
//     return "";
//   } else if (cartState.value > 9) {
//     return "9+";
//   } else {
//     return cartState.value;
//   }
// };

// return (
//   <div className="cart-container" onClick={props.onClick}>
//     <h1
//       className={
//         "text-green cart-text " + (cartState.value > 9 ? "cart-text-ten" : "")
//       }
//     >
//       {display_text()}
//     </h1>
//     <p className={cartState.value > 9 ? "cart-tooltip" : "hidden"}>
//       {cartState.value}
//     </p>
//   </div>
// );
