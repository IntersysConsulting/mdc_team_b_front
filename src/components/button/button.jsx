import React from "react";
import "./button.css";
import { Button } from "react-bootstrap";

const ButtonComponent = props => {
  return (
    <Button
      className={"button rounded " + props.className}
      style={{
        width: props.width,
        height: props.height
      }}
      variant={props.variant}
      size={props.size}
      block={props.block}
      active={props.active}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <p className="">{props.children}</p>
      <div className={props.icon ? "button-icon-padding" : "hidden"}></div>
      <img alt="" src={props.icon} className={props.icon ? "" : "hidden"}></img>
    </Button>
  );
};

export default ButtonComponent;
