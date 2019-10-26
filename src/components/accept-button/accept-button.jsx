import React from "react";
import Button from "../button/button.jsx";
import CartIcon from "./cart.svg";
import "./accept-button.css";
const AcceptButton = props => {
  return (
    <Button
      className={
        "accept-button text-white " +
        (props.border ? "bg-green border-2 border-indigo " : "") +
        (props.cart ? "cart-icon " : "") +
        props.className
      }
      variant={
        props.variant ? props.variant : props.border ? "indigo" : "green"
      }
      icon={props.cart ? CartIcon : undefined}
      size={props.size}
      block={props.block}
      active={props.active}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </Button>
  );
};

export default AcceptButton;
