import React from "react";
import MenuButton from "./menu-button.jsx";

const MenuButtonDemo = () => {
  return (
    <div>
      <h1>Menu Button Demo</h1>
      <MenuButton></MenuButton>
      <MenuButton hide></MenuButton>
      <h3>See nothing? Try making the screen smaller</h3>
    </div>
  );
};

export default MenuButtonDemo;
