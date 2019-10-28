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

const UserPayment = (props) =>{

    const [showCardForm, setShowCardForm] = useState( {showing: false} );
    const loading = useSelector(state => state.paymentState.loading);
    const cards = useSelector(state => state.paymentState.cardsRetrieved);
    const cardsChanged = useSelector(state => state.paymentState.cardsChanged)
    //Info sent to stripe
    const paymentMethod = useSelector(state => state.checkoutState.newOrder.payment);
    const order_id = useSelector(state => state.checkoutState.order._id);

    const dispatch = useDispatch();
    let mainView = null;

    useEffect(() => {
        dispatch(getCardsAction());
    }, [dispatch]);

    useEffect(() => {
        if (cardsChanged)
            dispatch(getCardsAction());
        //dispatch(updatePayment(response.data.data.cards.default_source))
    }, [cardsChanged, dispatch]);

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

    const finishOrder = () => {
        const stripeInfo = {
            card_id : paymentMethod,
            order_id : order_id
        }
        props.finishOrder(stripeInfo);
    }

    (loading) 
    ? mainView = (
        <div>
            <div className="row justify-content-center">
                <Spinner className="Spinner" animation="border" variant="warning"/>
            </div>
            <div className="row justify-content-center">
                <p className="LoadingMessage"> We are working on it...</p>
            </div>
        </div>
        )
    : mainView = (
        <div className="container-fluid col-10 offset-1 justify-content-left">
            <div className="row">
                <CheckoutTitle currentView={props.currentView}></CheckoutTitle>
            </div>
            <div className="row ">
                {cardsToShow}
            </div>
            <div className="row">
                <p className="AddCard" onClick={ () => { setShowCardForm( { showing: !showCardForm.showing } ) } }> Add new card</p>
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
            <div className="row">
                <div className="offset-7 offset-md-9 col-3">
                        <AcceptButton className="FinishOrderPayment" border="primary" onClick={() => {
                            finishOrder();
                        }}> 
                            Finish order 
                        </AcceptButton>
                </div>
            </div>
            <div className="row">
                <div className="div-back-button BackForPayment">
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

export default UserPayment;