import React,{ useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import "./navigation-items.css"
import Item from "./item";
import { logoutApi } from "../../../api/authenticationApi"

const NavigationItems = (props) => {
    let component = null;
    const dispatch = useDispatch()
    const message = useSelector(store => store.authenticationState.message);


    useEffect(() => {
        if(message === "" ){
            props.history.push("/");
        }
    },[message, props.history])


    const logout = () => {
        if (props.accessLevel.role === "admin") {   
            dispatch(logoutApi(true))
        } else {
            dispatch(logoutApi())
        }
    }

    switch(props.accessLevel) {
        case('admin'):
        component = (
            <ul className="NavigationItems">
                <div className = "TitlesContainer">
                    <p className="SectionTitle">Admin</p>
                </div>
                <Item link="/admin">Dashboard</Item>
                <Item link="/admin/products">Products</Item>
                <Item link="/admin/orders">Orders</Item>
                <Item link="/admin/staff">Staff</Item>
                <Item link="/admin/banners">Banner</Item>
                <Item onClick={logout}>Log out</Item>
            </ul>
        );
        break;
        case('registeredUser'):
        component = (
            <ul className="NavigationItems">
                <div className = "TitlesContainer">
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
                <Item onClick={logout}>Log out</Item>

            </ul>
        );
        break;
        case('guest'):
        default:
        component = (
            <ul className="NavigationItems">
                <div className = "TitlesContainer">
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

export default withRouter(NavigationItems)
