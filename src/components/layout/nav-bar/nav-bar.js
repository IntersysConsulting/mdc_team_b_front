import React from "react";
import "./nav-bar.css";
import Logo from "../logo/logo";
import SearchBar from "../search-bar/search-bar";
import CartContainer from "../../../containers/cart/demo-cart.js";
import WelcomeMessage from "../welcome-message/welcome";
import DrawerToggle from "../side-drawer/drawer-toggle/drawer-toggle";

const Navbar = props => {
  let component = null;

  props.accessLevel.role === "admin"
    ? (component = (
        <header className="Navbar">
          <div className="row">
            <DrawerToggle clicked={props.drawerToggledClicked} />
            <div className="LogoSpaceAdmin">
              <Logo link="/admin" />
              <div className="row">
                <p className="AdminTextUnderLogo">Admin</p>
              </div>
            </div>
            <div className="Search col-xl-8 col-lg-7 col-md-6 col-sm-12 col-xs-12">
              <div className="row WelcomeSpaceAdmin">
                <WelcomeMessage accessLevel={props.accessLevel} />
              </div>
            </div>
          </div>
        </header>
      ))
    : (component = (
        <header className="Navbar">
          <div className="row">
            <DrawerToggle clicked={props.drawerToggledClicked} />
            <Logo link="/" />
            <div className="Search col-xl-8 col-lg-7 col-md-6 col-sm-12 col-xs-12">
              <div>
                <SearchBar
                  filters={["Bears", "are", "sorta", "cool"]}
                ></SearchBar>
              </div>
              <div className="row">
                <WelcomeMessage accessLevel={props.accessLevel} />
              </div>
            </div>
            <div className="CartSpace">
              <CartContainer value={9} />
            </div>
          </div>
        </header>
      ));

  return component;
};

export default Navbar;
