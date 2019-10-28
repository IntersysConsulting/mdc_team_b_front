import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutTitle from '../../components/checkout-view-components/CheckoutTitle';
import BackPageButton from '../../components/back-page-button/back-page-button';
import AddCardForm from '../../components/add-card-form/add-card-form';
import "./payment.css"

const GuestPayment = (props) => {
    let mainView = null;

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