import React, {useState, useEffect} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getCardsAction } from "../../actions/paymentActions";
import CheckoutTitle from '../../components/checkout-view-components/CheckoutTitle';
import AcceptButton from '../../components/accept-button/accept-button';
import BackPageButton from '../../components/back-page-button/back-page-button';
import AddCardForm from '../../components/add-card-form/add-card-form';
import PaymentCard from '../../components/payment-card/payment-card';
import Spinner from 'react-bootstrap/Spinner'

import "./payment.css"

const GuestPayment = (props) => {
    let mainView = null;

    const finishOrder = () => {
        //props.finishOrder(stripeInfo);
    }

    
    mainView = (
        <div className="container-fluid col-10 offset-1 justify-content-left">
            <div className="row">
                <CheckoutTitle currentView={props.currentView}></CheckoutTitle>
            </div>
            <div className = "row">
                <StripeProvider apiKey="pk_test_NBASxRbWlujzbXlKX2b2LK5Z00NiKnLeJ9">
                    <Elements>
                        <AddCardForm finishOrder={props.finishOrder} />
                    </Elements>
                </StripeProvider>
            </div>
            <div className="row">
                <div className="div-back-button">
                    <BackPageButton className="text-right" title="Back" text="Shipping and Billing" onClick={props.backView} />
                </div>
            </div>
        </div>
        )

    return (
        <div>
            {mainView}
        </div>
    )
}

export default GuestPayment;