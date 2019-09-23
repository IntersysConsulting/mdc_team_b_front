import React from "react";
import "./navigation-items.css"
import "./item"
import Item from "./item";

const navigationItems = (props) => {
    let component = null 
    console.log(props.accessLevel);

    switch(props.accessLevel){
        case('admin'):
        component = (
            <ul className="NavigationItems">
                <div class = "TitlesContainer">
                    <p class="SectionTitle">Admin</p>
                </div>
                <Item link="/">Dashboard</Item>
                <Item link="/">Products</Item>
                <Item link="/">Orders</Item>
                <Item link="/">Staff</Item>
                <Item link="/">Banners</Item>
                <Item link="/">Log out</Item>
            </ul>
        );
        break;
        case('registeredUser'):
        component = (
            <ul className="NavigationItems">
                <div class = "TitlesContainer">
                    <p class="SectionTitle">Navigation</p>
                </div>
                <Item link="/">Storefront</Item>
                <Item link="/">My cart</Item>
                <div className = "TitlesContainer"> <hr className="Dividers"/></div>
                <div className = "TitlesContainer">
                    <p className="SectionTitle">My Account</p>
                </div>
                <Item link="/">Summary</Item>
                <Item link="/">Billing Info</Item>
                <Item link="/">Shipping Info</Item>
                <Item link="/">Orders</Item>
            </ul>
        );
        break;
        case('guest'):
        default:
        component = (
            <ul className="NavigationItems">
                <div class = "TitlesContainer">
                    <p class="SectionTitle">Navigation</p>
                </div>
                <Item link="/"> Storefront </Item>
                <Item link="/">My cart</Item>
            </ul>
        );
        break;
    }

    return component;

};

export default navigationItems;