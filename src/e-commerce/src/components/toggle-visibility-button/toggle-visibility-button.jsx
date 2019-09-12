import React from "react";
import "./toggle-visibility-button.css";

const ToggleVisibilityButton = props => {
  return (
    <div
      className={
        "toggle-visibility-button " + (props.open ? "open-eye" : "closed-eye")
      }
      onClick={props.onClick}
    ></div>
  );
};

export default ToggleVisibilityButton;
