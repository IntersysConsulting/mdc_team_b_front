import React, { useState } from "react";
import { withRouter } from 'react-router-dom'
import "./layout-customer.css";
import Navbar from "./nav-bar/nav-bar"
import SideDrawer from "./side-drawer/side-drawer"

const LayoutCustomer = (props) => {
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

    let showLayout = null;
    
    if(props.location.pathname === "/login" || props.location.pathname === "/login-admin" ){
        showLayout = <React.Fragment>{props.children}</React.Fragment>
    } else {
        let attachedClasses = "LayoutWindowCustomer";
        if(sideDrawerState.showSideDrawer === true){
            attachedClasses = "DrawerOpenCustomer";
        }

        showLayout = (
            <div className= {attachedClasses}>
                <Navbar 
                    accessLevel = {props.accessLevelState} 
                    drawerToggledClicked={SideDrawerToggleHandler} />
                <SideDrawer 
                    open = {sideDrawerState.showSideDrawer} 
                    closed = {SideDrawerClosedHandler}
                    accessLevel = { props.accessLevelState} />
                <div>{props.children}</div>
            </div>
        )
    }
    return (showLayout)
}

const LayoutCustomerWithRourter = withRouter(LayoutCustomer)
export default LayoutCustomerWithRourter;