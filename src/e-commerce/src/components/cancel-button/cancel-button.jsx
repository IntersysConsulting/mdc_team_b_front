import React from "react";
import Button from "../button/button.jsx";

const CancelButton = props => {
  return (
    <Button
      className={"text-white " + props.className}
      variant="indigo"
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

export default CancelButton;
