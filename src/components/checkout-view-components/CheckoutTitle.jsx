import React from 'react';
import Title from '../../components/title/title';

const CheckoutTitle = (props) => {

    switch(props.currentView){
        case 1:
            return (
                <Title>Order Summary</Title>
            )
        case 2:
            if(props.shipping){
                return (
                    <div id="shipping-address-title">
                        <Title>Shipping Address</Title>
                    </div>
                )
            }
            else {
                return (
                    <div id="billing-address-title">
                        <Title>Billing Address</Title>
                    </div>
                )
            }
        case 3:
            return (
                <div id="checkout-payment-title">
                    <Title>Payment</Title>
                </div>
            )
        case 4:
            return (
                <div id="purchase-complete-title" className="text-center">
                    <Title>Purchase Complete</Title>
                </div>
            )
        default:
            return (
                <div id="without-orders-title" className="text-center">
                    <Title>Ooops, it looks like you haven't completed your order!</Title>
                </div>
            )
    }
}

export default CheckoutTitle;