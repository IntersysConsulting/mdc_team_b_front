import React from "react";

import "./menu-button.css";

const MenuButton = props => {
  return <div className={"menu-button" + (props.hide ? " hide" : "")}></div>;
};

export default MenuButton;
