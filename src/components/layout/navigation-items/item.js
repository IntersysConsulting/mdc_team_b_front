import React from "react";
import {Link} from  'react-router-dom';
import "./item.css"

const Item = (props) => { 
    return(
    <li className="Item">
        <Link onClick={props.onClick} to={props.link}>{props.children}</Link>
    </li>
);

}

export default Item;