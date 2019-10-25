import React, {useState, useEffect} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getCardsAction, addCardAction, deleteCardAction } from "../../actions/paymentActions";
import { updatePayment } from '../../actions/checkoutActions';
import axios from "axios";
import CheckoutTitle from '../../components/checkout-view-components/CheckoutTitle';
import AcceptButton from '../../components/accept-button/accept-button';
import BackPageButton from '../../components/back-page-button/back-page-button';
import AddCardForm from '../../components/add-card-form/add-card-form';
import PaymentCard from '../../components/payment-card/payment-card';

import "./payment.css"

const CheckoutPayment = (props) =>{
    const [showCardForm, setShowCardForm] = useState( {showing: false} );
    const cards = useSelector(state => state.paymentState.cardsRetrieved);
    const loading = useSelector(state => state.paymentState.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Hi");
        dispatch(getCardsAction());
        //dispatch(updatePayment(response.data.data.cards.default_source))
    }, [dispatch]);

    let cardsToShow = cards.map(card => {
        return (
            <PaymentCard
                id = {card.id}
                number = {card.last4}
                brand = {card.brand}
                owner = "Pending name"
            />
        );
    });

    if(cards.length === 0){
        cardsToShow = <p className="NoCardsLabel"> You have not any registered cards yet </p>
    }

    return (
        <div className="container-fluid col-10 offset-1 justify-content-left">
            <div className="row">
                <CheckoutTitle currentView={props.currentView}></CheckoutTitle>
                <div className="AddCardIcon" onClick={ () => { setShowCardForm( { showing: !showCardForm.showing } ); }}> 
                    + 
                </div>{" "}
            </div>
            <div className="row ">
                {cardsToShow}
            </div>
            <div className = "row">
                { (showCardForm.showing) 
                ? (
                    <StripeProvider apiKey="pk_test_NBASxRbWlujzbXlKX2b2LK5Z00NiKnLeJ9">
                        <Elements>
                            <AddCardForm />
                        </Elements>
                    </StripeProvider>)
                : <p></p>
                }
            </div>
        </div>
    )
}

export default CheckoutPayment;