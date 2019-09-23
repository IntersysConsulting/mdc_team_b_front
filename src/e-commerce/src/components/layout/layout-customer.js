import React, { useState } from "react";
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

    return (
        <div className="LayoutWindowCustomer">
            <Navbar 
                accessLevel = {props.accessLevelState.accesses[0]} 
                drawerToggledClicked={SideDrawerToggleHandler} />
            <SideDrawer 
                open = {sideDrawerState.showSideDrawer} 
                closed = {SideDrawerClosedHandler}
                accessLevel = { props.accessLevelState.accesses[0] } />
            <div>{props.children}</div>
        </div>
    )
}

export default LayoutCustomer;