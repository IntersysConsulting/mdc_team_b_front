import React, { useState } from "react";
import "./layout-admin.css";
import Navbar from "./nav-bar/nav-bar"
import SideDrawer from "./side-drawer/side-drawer"

const LayoutAdmin = (props) => {
    const [sideDrawerState, setSideDrawerState] = useState({ showSideDrawer: false });

    const SideDrawerClosedHandler = () => {
        setSideDrawerState({ showSideDrawer: false });
    }

    const SideDrawerToggleHandler = () => {
        setSideDrawerState( (prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer,
            };
        } );
    }

    let attachedClasses = "LayoutWindowAdmin";
    if(sideDrawerState.showSideDrawer === true){
        attachedClasses = "DrawerOpenAdmin";
    }

    return (
        <div className= {attachedClasses}>
            <Navbar 
                accessLevel = { props.accessLevelState } 
                drawerToggledClicked={SideDrawerToggleHandler} />
            <SideDrawer 
                open = {sideDrawerState.showSideDrawer} 
                closed = {SideDrawerClosedHandler}
                accessLevel = { props.accessLevelState } />
                <div>{props.children}</div>
        </div>
    )
}

export default LayoutAdmin;