import React from "react";
import Button from "../button/button.jsx";
import Icon from "./edit-button.svg";
import "./edit-button.css";

function EditButton(props) {
  return (
    <Button
      icon={props.icon ? Icon : undefined}
      className={"edit-button text-white " + props.className}
      variant="orange"
      width={props.width}
      height={props.height}
      size={props.size}
      block={props.block}
      active={props.active}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

export default EditButton;
