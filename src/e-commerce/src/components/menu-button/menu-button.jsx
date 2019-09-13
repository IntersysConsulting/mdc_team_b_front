import React from "react";

import "./menu-button.css";

const MenuButton = props => {
  return (
    <div
      className={"menu-button" + (props.hide ? " hide" : "")}
      onClick={props.onClick}
    ></div>
  );
};

export default MenuButton;
