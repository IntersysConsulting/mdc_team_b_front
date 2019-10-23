import React, {useState, useEffect} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import { useDispatch } from 'react-redux';
import { updatePayment } from '../../actions/checkoutActions';
import axios from "axios";
import CheckoutTitle from '../../components/checkout-view-components/CheckoutTitle';
import AcceptButton from '../../components/accept-button/accept-button';
import BackPageButton from '../../components/back-page-button/back-page-button';
import AddCardForm from '../../components/add-card-form/add-card-form';
import PaymentCard from '../../components/payment-card/payment-card';

import "./payment.css"

const CheckoutPayment = (props) =>{
    const dispatch = useDispatch();
    const [showCardForm, setShowCardForm] = useState( {showing: false} );
    const [cardsRetrieved, setCardsRetrieved] = useState({ cards: [] });

    useEffect(() => {
        axios
        .get(process.env.REACT_APP_API_URL + "/payment/cards", {
            headers: {
              authorization: "Bearer " + localStorage.getItem("access_token")
            }
          })
          .then(response => {
            setCardsRetrieved({ cards: response.data.data.cards.sources.data })
            console.log(response)
            dispatch(updatePayment(response.data.data.cards.default_source))
          });
      }, [dispatch]);

      let cards = cardsRetrieved.cards.map(card => {
        return (
          <PaymentCard
            id = {card.id}
            number = {card.last4}
            brand = {card.brand}
            owner = "Pending name"
          />
        );
      });

    return (
        <div className="container-fluid col-10 offset-1 justify-content-left">
            <div className="row">
                <CheckoutTitle currentView={props.currentView}></CheckoutTitle>
            </div>
            <div className="row col-12 justify-content-left">
                {cards}
            </div>
            <div className = "row">
                <p className="LabelAddNew" onClick={ () => { setShowCardForm( { showing: !showCardForm.showing } ); }}> Add new card</p>
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