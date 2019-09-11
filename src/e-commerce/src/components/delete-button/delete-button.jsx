import React from "react";
// import "./delete-button.css";
import Button from "../button/button.jsx";
import image from "./delete-button.svg";

const DeleteButton = props => {
  return (
    <Button
      className={"auto-height icon-only " + props.className}
      variant={props.variant}
      icon={image}
      width={props.width}
      height={props.height}
      size={props.size}
      block={props.block}
      active={props.active}
      disabled={props.disabled}
      onClick={props.onClick}
    ></Button>
  );
};

export default DeleteButton;
