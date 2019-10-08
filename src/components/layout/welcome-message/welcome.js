import React from "react";
import {useSelector} from "react-redux";
import {Link} from  'react-router-dom';
import "./welcome.css";

const WelcomeMessage = (props) => {
    const name = useSelector(store => store.authenticationState.name)
    
    let component = null;
    let attachedClass = "WelcomeMessage";
    if(props.smallView){
        attachedClass = "WelcomeMessageMobile";
    }
    

    switch(props.accessLevel.role){
        case("registeredUser"):
            component = (<Link className={attachedClass} to={"/account"}>Welcome {name}!</Link>) 
        break;
        case("guest"):
            component = (<Link className={attachedClass} to={"/login"}>Welcome, please log in!</Link>) 
        break;
        case("admin"):
            component = (<Link className={attachedClass} to={"/admin"}>Welcome {name}!</Link>) 
        break;
        default:
            ;
    }

    return(component);
};

export default WelcomeMessage;