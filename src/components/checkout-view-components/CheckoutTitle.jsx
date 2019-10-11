import React from 'react';
import Title from '../../components/title/title';

const CheckoutTitle = (props) => {

    switch(props.currentView){
        case 0:
            return (
                <Title>Order Summary</Title>
            )
        case 1:
            return (
                <div id="shipping-address-title">
                    <Title>Shipping Address</Title>
                </div>
            )
        case 2:
            return (
                <div id="checkout-payment-title" className="offset-1">
                    <Title>Payment</Title>
                </div>
            )
        case 3:
            return (
                <div id="purchase-complete-title" className="text-center">
                    <Title>Purchase Complete</Title>
                </div>
            )
        default:
            break;
    }
}

export default CheckoutTitle;