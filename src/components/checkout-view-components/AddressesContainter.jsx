import React from 'react';
import ShippingAddress from './ShippingAddress';
import BillingAddress from './BillingAddress';

const AddressesContainer = () => {


    return (
        <div id="both-addresses-main-container" className="row justify-content-center">
            <ShippingAddress></ShippingAddress>
            <BillingAddress></BillingAddress>
        </div>
    )
}

export default AddressesContainer;