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
        <div className="LayoutWindow">
            <Navbar 
                accessLevel = {props.accessLevelState.accesses[0]} 
                drawerToggledClicked={SideDrawerToggleHandler} />
            <SideDrawer 
                open = {sideDrawerState.showSideDrawer} 
                closed = {SideDrawerClosedHandler}
                accessLevel = { props.accessLevelState.accesses[0] } />
        </div>
    )
}

export default LayoutCustomer;