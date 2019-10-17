import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../checkout-address-modal/checkout-address-modal.css'
import { Modal } from 'react-bootstrap'
import Title from '../title/title'
import AddressCard from './address-card'
import { useSelector, useDispatch } from 'react-redux';
import { updateBilling, updateShipping } from '../../actions/checkoutActions'

const CheckoutAddressModal = (props) => {

    const [redirect, setRedirect] = useState(false);
    const handleRedirect = () => setRedirect(true);

    const shipping_address = useSelector((state) => state.checkoutState.shipping_address);
    const billing_address = useSelector((state) => state.checkoutState.billing_address);
    const dispatch = useDispatch();

    const selectBilling = (key, billing_address) => {
        dispatch(updateBilling(key, billing_address))
    }

    const selectShipping = (key, shipping_address) => {
        dispatch(updateShipping(key, shipping_address))
    }

    let component = null;
    let shipping_address_cards = [];
    let billing_address_cards = [];

    for (let i=0; i<shipping_address.length; i++){
        shipping_address_cards.push(
        <AddressCard
        key={i} 
        name={shipping_address[i].first_name+" "+shipping_address[i].last_name} 
        address={shipping_address[i].address} 
        country={shipping_address[i].country} 
        state={shipping_address[i].state} 
        zipCode={shipping_address[i].zip_code}
        selectAddress={() => selectShipping(i,shipping_address[i])}
        />)
    }

    for (let i=0; i<billing_address.length; i++){
        billing_address_cards.push(
        <AddressCard 
        key={i}
        name={billing_address[i].first_name+" "+billing_address[i].last_name} 
        address={billing_address[i].address} 
        country={billing_address[i].country} 
        state={billing_address[i].state} 
        zipCode={billing_address[i].zip_code}
        selectAddress={() => selectBilling(i,billing_address[i])}
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