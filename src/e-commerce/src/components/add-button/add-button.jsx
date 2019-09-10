import React from "react";
import Button from "../button/button.jsx";
import "./add-button.css";

function AddButton(props) {
  return (
    <Button
      className={
        "text-white " +
        (props.circle ? "rounded-circle bg-green auto-circle " : "") +
        props.className
      }
      variant={props.square ? "indigo" : props.circle ? "green" : "error"}
      size={props.size}
      block={props.block}
      active={props.active}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <h3 className={props.circle ? "circle-text" : ""}>
        {props.square ? props.children : props.circle ? "+" : ""}
      </h3>
    </Button>
  );
}

export default AddButton;
