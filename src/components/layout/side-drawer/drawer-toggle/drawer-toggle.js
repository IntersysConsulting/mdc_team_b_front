import React from "react";
import "./drawer-toggle.css";
import menu from "./menu.png";

const drawerToggle = (props) => (
    <div className="DrawerToggle" onClick = {props.clicked}>
        <img src={menu} alt="Test" className="burgerIcon"/>
    </div>
);

export default drawerToggle;
