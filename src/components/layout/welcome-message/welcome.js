import React from "react";
import {Link} from  'react-router-dom';
import "./welcome.css";

const WelcomeMessage = (props) => {
    let component = null;
    let attachedClass = "WelcomeMessage";
    if(props.smallView){
        attachedClass = "WelcomeMessageMobile";
    }

    switch(props.accessLevel.role){
        case("registeredUser"):
            component = (<Link className={attachedClass} to={"/account"}>Welcome {props.accessLevel.name}!</Link>) 
        break;
        case("guest"):
            component = (<Link className={attachedClass} to={"/login"}>Welcome, please log in!</Link>) 
        break;
        case("admin"):
            component = (<Link className={attachedClass} to={"/admin"}>Welcome {props.accessLevel.name}!</Link>) 
        break;
        default:
            ;
    }

    return(component);
};

export default WelcomeMessage;
