import React from "react";

import Button from "../button/button.jsx";
import "./change-view-button.css";

const ChangeViewButton = props => {
  return (
    <Button
      className={"change-button text-white " + props.className}
      variant={"orange"}
      height={props.height}
      width={props.width}
      size={props.size}
      block={props.block}
      active={props.active}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default ChangeViewButton;
