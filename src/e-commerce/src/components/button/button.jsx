import React from "react";
import "./button.css";

function Button(props) {
  return (
    <div className={"button " + props.className}>
      <p className="">{props.children}</p>
      <div className={props.cart ? "button-icon-padding" : "hidden"}></div>
      <img alt="" src={props.icon} className={props.icon ? "" : "hidden"}></img>
    </div>
  );
}

export default Button;
