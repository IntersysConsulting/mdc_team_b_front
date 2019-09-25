import React from "react";
import "./nav-bar.css";
import Logo from "../logo/logo"
import SearchBar from "../search-bar/search-bar"
import CartContainer from "../../../containers/cart/demo-cart.js";
import WelcomeMessage from "../welcome-message/welcome"
import DrawerToggle from "../side-drawer/drawer-toggle/drawer-toggle"

const Navbar = (props) => {

    return(
    <header className="Navbar">
        <div className = "row">
            <DrawerToggle clicked={props.drawerToggledClicked} />
            <Logo link = "/"/>
            <div className = "Search col-xl-8 col-lg-7 col-md-6 col-sm-12 col-xs-12">
                <div>
                    <SearchBar></SearchBar>
                </div>
                <div className = "row">
                    <WelcomeMessage accessLevel = {props.accessLevel} />
                </div>
            </div>
            <div className="CartSpace">
                <CartContainer value = {9} />
            </div>
        </div>
        
    </header>
    );
}

export default Navbar;