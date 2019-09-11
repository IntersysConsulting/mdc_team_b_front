import React from "react";
import Button from "../button/button.jsx";
import "./manage-info-button.css";

const ManageInfoButton = props => {
  return (
    <Button
      height="auto"
      className={"manage-button text-white " + props.className}
      variant="orange"
      size={props.size}
      block={props.block}
      active={props.active}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <h3 className="small-text">Manage my</h3>
      <h1 className="regular-text">{props.children}</h1>
    </Button>
  );
};

export default ManageInfoButton;
