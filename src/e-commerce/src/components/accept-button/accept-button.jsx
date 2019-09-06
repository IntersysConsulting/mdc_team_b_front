import React from "react";
import Button from "../button/button.jsx";
import CartIcon from "./cart.svg";

function AcceptButton(props) {
  return (
    <Button
      className={
        "bg-green text-white " + (props.border ? " border-2 border-blue" : "")
      }
      icon={props.cart ? CartIcon : undefined}
    >
      {props.children}
    </Button>
  );
}

export default AcceptButton;
