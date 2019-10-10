import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../checkout-address-modal/checkout-address-modal.css'
import { Modal } from 'react-bootstrap'
import Title from '../title/title'
import AddressCard from './address-card'
import { useSelector } from 'react-redux';

const CheckoutAddressModal = (props) => {

    const [redirect, setRedirect] = useState(false);
    const handleRedirect = () => setRedirect(true);

    const shipping_addresses = useSelector((state) => state.checkoutState.shipping_address);
    const billing_addresses = useSelector((state) => state.checkoutState.billing_address);

    let component = null;
    let shipping_address_cards = [];
    let billing_address_cards = [];


    for (let i=0; i<shipping_addresses.length; i++){
        shipping_address_cards.push(
        <AddressCard 
        name={shipping_addresses[i].first_name+" "+shipping_addresses[i].last_name} 
        address={shipping_addresses[i].address} 
        country={shipping_addresses[i].country} 
        state={shipping_addresses[i].state} 
        zipCode={shipping_addresses[i].zip_code}
        onClick={props.onClick}
        />)
    }

    for (let i=0; i<billing_addresses.length; i++){
        billing_address_cards.push(
        <AddressCard 
        name={billing_addresses[i].first_name+" "+billing_addresses[i].last_name} 
        address={billing_addresses[i].address} 
        country={billing_addresses[i].country} 
        state={billing_addresses[i].state} 
        zipCode={billing_addresses[i].zip_code}
        onClick={props.onClick}
        />)
    }


    if (props.type === "shipping"){
        component =
        <>
        {redirect ? <Redirect to={props.url} /> : null}
    <div>
        <Modal id="checkout-address-modal" className="" dialogClassName="custom-modal" show={props.show} onHide={props.handleShow}>
            <Modal.Header id="address-modal-header" closeButton/>
            
            <div id="address-modal-header" closeButton>
                <Title id="checkout-address-modal-title">{props.title}</Title>
                <p id="checkout-address-modal-subtitle">{props.subtitle}</p>
            </div>

            <button id = "checkout-modal-new-address-btn" onClick={handleRedirect}>
                <p id="plus-sign">+</p>
                <p id="plus-sign-text"> New {props.children} address</p>
            </button>

            <Modal.Body id="address-modal-content">
                {shipping_address_cards}
            </Modal.Body>
            
        </Modal>
        </div>
    </>
    }

    else if (props.type === "billing"){
        component = 
        <>
        {redirect ? <Redirect to={props.url} /> : null}
    <div>
        <Modal id="checkout-address-modal" className="" dialogClassName="custom-modal" show={props.show} onHide={props.handleShow}>
            <Modal.Header id="address-modal-header" closeButton/>
            
            <div id="address-modal-header" closeButton>
                <Title id="checkout-address-modal-title">{props.title}</Title>
                <p id="checkout-address-modal-subtitle">{props.subtitle}</p>
            </div>

            <button id = "checkout-modal-new-address-btn" onClick={handleRedirect}>
                <p id="plus-sign">+</p>
                <p id="plus-sign-text"> New {props.children} address</p>
            </button>

            <Modal.Body id="address-modal-content">
                {billing_address_cards}
            </Modal.Body>
            
        </Modal>
        </div>
    </>
    }

    return (
        <div>
            {component}
        </div>
    );
}
export default CheckoutAddressModal