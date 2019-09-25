import React from "react";
import {Route, Link} from  'react-router-dom';
import "./item.css"

const Item = (props) => (
    <li className="Item">
        <Link to={props.link}>{props.children}</Link>
    </li>
);

export default Item;