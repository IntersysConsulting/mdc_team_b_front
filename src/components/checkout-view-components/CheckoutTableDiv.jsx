import React from 'react';
import CheckoutTable from '../../components/checkout-table/checkout-table';

const CheckoutTableDiv = (props) => {

    return (
        <div id="checkout-table" className="col-10 offset-1">
            <CheckoutTable products={props.products}></CheckoutTable>
        </div>
    )
}

export default CheckoutTableDiv