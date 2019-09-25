import React from "react"
import {Link} from  "react-router-dom";
import "./logo.css";
import logo from "./logo.png"

const Logo = (props) => (
    <div className="Logo">
        <Link to={props.link}><img src={logo} alt= "Intersys logo"/></Link>
    </div>
    
);

export default Logo;