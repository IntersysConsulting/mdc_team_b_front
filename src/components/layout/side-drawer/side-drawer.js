import React from "react";
import "./side-drawer.css";
import NavigationItems from "../navigation-items/navigation-items";
import WelcomeMessage from "../welcome-message/welcome"
import Backdrop from "../blocker/blocker";

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if(props.open){
        attachedClasses = ["SideDrawer", "Open"];
    }
    
    console.log(props.accessLevel.role)
    return(
        <div>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <WelcomeMessage accessLevel = {props.accessLevel} smallView = {true} />
                <nav>
                    <NavigationItems accessLevel = {props.accessLevel.role} />
                </nav>
            </div>
        </div>
    );
};

export default sideDrawer;