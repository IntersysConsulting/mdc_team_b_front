import React from "react";
import "./item.css"

const Item = (props) => (
    <li className="Item">
        <a href={props.link}> {props.children} </a>
    </li>
);

export default Item;