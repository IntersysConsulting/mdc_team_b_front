import React from "react";
import "./navigation-items.css"
import Item from "./item";

const navigationItems = (props) => {
    let component = null 
    console.log(props.accessLevel);

    switch(props.accessLevel){
        case('admin'):
        component = (
            <ul className="NavigationItems">
                <div class = "TitlesContainer">
                    <p className="SectionTitle">Admin</p>
                </div>
                <Item link="/admin">Dashboard</Item>
                <Item link="/admin/products">Products</Item>
                <Item link="/admin/orders">Orders</Item>
                <Item link="/admin/staff">Staff</Item>
                <Item link="/admin/banners">Banners</Item>
                <Item>Log out</Item>
            </ul>
        );
        break;
        case('registeredUser'):
        component = (
            <ul className="NavigationItems">
                <div class = "TitlesContainer">
                    <p className="SectionTitle">Navigation</p>
                </div>
                <Item link="/">Storefront</Item>
                <Item link="/cart">My cart</Item>
                <div className = "TitlesContainer"> <hr className="Dividers"/></div>
                <div className = "TitlesContainer">
                    <p className="SectionTitle">My Account</p>
                </div>
                <Item link="/summary">Summary</Item>
                <Item link="/billing-info">Billing Info</Item>
                <Item link="/shipping-info">Shipping Info</Item>
                <Item link="/orders">Orders</Item>
            </ul>
        );
        break;
        case('guest'):
        default:
        component = (
            <ul className="NavigationItems">
                <div class = "TitlesContainer">
                    <p className="SectionTitle">Navigation</p>
                </div>
                <Item link="/"> Storefront </Item>
                <Item link="/cart">My cart</Item>
            </ul>
        );
        break;
    }

    return component;

};

export default navigationItems;