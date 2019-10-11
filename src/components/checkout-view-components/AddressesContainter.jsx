import React from 'react';
import { useSelector } from 'react-redux';
import ShippingAddress from './ShippingAddress';
import BillingAddress from './BillingAddress';

const AddressesContainer = (props) => {

    const order = useSelector((state) => state.checkoutState.order);
    const shipping_addresses = useSelector((state) => state.checkoutState.shipping_address);
    const billing_addresses = useSelector((state) => state.checkoutState.billing_address);

    const shipping_address = order.shipping !== 0 ? shipping_addresses[order.billing] : shipping_addresses[0];
    const billing_address = order.billing !== 0 ? billing_addresses[order.billing] : billing_addresses[0];

    return (
        <div id="both-addresses-main-container" className="row justify-content-center">
            <ShippingAddress shipping_address={shipping_address}></ShippingAddress>
            <BillingAddress billing_address={billing_address}></BillingAddress>
        </div>
    )
}

export default AddressesContainer;