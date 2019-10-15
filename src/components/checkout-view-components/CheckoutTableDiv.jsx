import React from 'react';
import CheckoutTable from '../../components/checkout-table/checkout-table';
import NextPageButton from '../next-page-button/next-page-button';
import CheckoutTitle from './CheckoutTitle';

const CheckoutTableDiv = (props) => {

    return (
        <div id="checkout-table" className="col-10 offset-1">
            <CheckoutTitle currentView={props.currentView}></CheckoutTitle>
            <CheckoutTable products={props.products}></CheckoutTable>
            <div id="next-addresses-button" className="text-right offset-right-4">
                <NextPageButton title="Next" text="Shipping and Billing" onClick={props.setCurrentView} />
            </div>
        </div>
    )
}

export default CheckoutTableDiv