import React, {useState, useEffect} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import MyAccountCard from "../../components/my-account-card/my-account-card";

import "./my-account.css";

const MyAccountView = props => {
    const role = useSelector(store => store.authenticationState.role)
    const name = useSelector(store => store.authenticationState.name)
    const token = "Bearer " + localStorage.getItem("access_token");
    const [defaultBilling, setDefaultBilling] = useState({});
    const [defaultShipping, setDefaultShipping] = useState({});
    const [hasErrors, setHasErrors] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState("@");
    const [urls] = useState({
        customer: process.env.REACT_APP_API_URL + "/customers/"
      });
    const [defaultHeaders] = useState({
        headers: {
            Authorization: token
        }
    });

    useEffect(() => {
        if(role === "registeredUser") {
            axios
            .get(urls.customer, defaultHeaders)
            .then(response => {
                setIsLoading(false);
                console.log(response)
                if (Object.keys(response.data.data.billing_addresses).length !== 0) {
                    setDefaultBilling(response.data.data.billing_addresses[0]);
                }
                if (Object.keys(response.data.data.shipping_addresses).length !== 0) {
                    setDefaultShipping(response.data.data.shipping_addresses[0]);
                }
                setEmail(response.data.data.email);
            })
            .catch(error => {
                setIsLoading(false);
                setHasErrors(true);
            });
        }
    }, [defaultHeaders, urls, role]);

    let component = null;
    
    const toBilling = () => {
        props.history.push("/account/billing");
    };
    const toShipping = () => {
        props.history.push("/account/shipping");
    };
    const toOrders = () => {
        props.history.push("/account/orders");
    };
    const toLogin = () => {
        props.history.push("/login");
    };
    const toSignup = () => {
        props.history.push("/sign-up");
    };
    
    const billingButtonText = (
        <span className={"my-account-card-button-text-span"}>
            <small className={"my-account-card-button-text-small"}>Manage my</small><br/>
            Shipping Addresses
        </span>
    )
    const shippingButtonText = (
        <span className={"my-account-card-button-text-span"}>
            <small className={"my-account-card-button-text-small"}>Manage my</small><br/>
            Shipping Addresses
        </span>
    )
    const ordersButtonText = (
        <span className={"my-account-card-button-text"}>See my orders</span>
    )

    const myAccount = (
        <div className="container">
            <h1 id={"my-account-title"}>My Account</h1>
            <div className={"my-account-details-container"}>
                <p id={"my-account-username"}>{name}</p>
                <p id={"my-account-email"}>{email}</p>
            </div>            
            <div className="my-account-card-container">
                <div className="my-account-big-cards-container">
                    <MyAccountCard
                        title="Preferred Billing Address"
                        onClick={toBilling}
                        buttonText={billingButtonText}
                    >
                        {defaultBilling.first_name} {defaultBilling.last_name}<br/>
                        {defaultBilling.address}<br/>
                        {defaultBilling.city}<br/>
                        {defaultBilling.state}, {defaultBilling.zip_code}<br/>
                        {defaultBilling.country}<br/>
                    </MyAccountCard>
                    <MyAccountCard
                        title="Preferred Shipping Address"
                        onClick={toShipping}
                        buttonText={shippingButtonText}
                    >
                        {defaultShipping.first_name} {defaultShipping.last_name}<br/>
                        {defaultShipping.address}<br/>
                        {defaultShipping.city}<br/>
                        {defaultShipping.state}, {defaultShipping.zip_code}<br/>
                        {defaultShipping.country}<br/>
                    </MyAccountCard>
                </div>
                <MyAccountCard
                    title="My last order"
                    collapsable
                    onClick={toOrders}
                    buttonText={ordersButtonText}
                >
                    You haven't purchased anything yet.
                </MyAccountCard>
            </div>
        </div>
    )

    const notUser = (
        <div>
            <p className="error-not-user"> Restricted </p>
            <p className= "not-a-user">
                To see your account details, please <br/>
                <span className={"my-account-link"} onClick={toLogin}>log in</span> or <span className={"my-account-link"} onClick={toSignup}>sign up</span>
            </p>
        </div>
    )

    const admin = (
        <div>
            <p className="error-not-user"> Customer View </p>
            <p className= "not-a-user">
                This page is for customers only<br/>
            </p>
        </div>
    )

    const error = (
        <div>
            <p className="error-not-user"> Error </p>
            <p className= "not-a-user">
                Something went wrong, try again later
            </p>
        </div>
    )

    switch(role){
        case("registeredUser"):
            if (isLoading){
                component = null;
            }
            else if(hasErrors){
                component = error;
            }
            else{
                component = myAccount;
            }
        break;
        case("guest"):
            component = notUser
        break;
        case("admin"):
            component = admin;
        break;
        case("error"):
            component = error;
            break;
        default:
            component = notUser
        break;
    }

    return component;
}

export default MyAccountView;