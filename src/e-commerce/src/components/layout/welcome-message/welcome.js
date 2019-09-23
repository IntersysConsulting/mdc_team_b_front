import React from "react";
import "./welcome.css";

const WelcomeMessage = (props) => {
    let attachedClass = "WelcomeMessage";
    if(props.smallView){
        attachedClass = "WelcomeMessageMobile";
     }

    return(
        (props.accessLevel.role == 'registeredUser' ||  props.accessLevel.role == 'admin')
        ? <a href={"/"} class={attachedClass}>Welcome {props.accessLevel.name}! </a> 
        : <a href={"/"} class={attachedClass}> Welcome, please log in! </a> 
    );
};

export default WelcomeMessage;