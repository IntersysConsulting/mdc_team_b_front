import React from "react";
import MenuButton from "./menu-button.jsx";

const MenuButtonDemo = props => {
  const AlertMenuButton = () => {
    alert("You clicked a menu button!");
  };
  return (
    <div>
      <h1>Menu Button Demo</h1>
      <MenuButton
        onClick={props.alerts ? AlertMenuButton : undefined}
      ></MenuButton>
      <MenuButton
        hide
        onClick={props.alerts ? AlertMenuButton : undefined}
      ></MenuButton>
      <h3>See nothing? Try making the screen smaller</h3>
    </div>
  );
};

export default MenuButtonDemo;
