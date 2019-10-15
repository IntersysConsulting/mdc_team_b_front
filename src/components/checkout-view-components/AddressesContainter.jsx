import React from 'react';
import ShippingAddress from './ShippingAddress';
import BillingAddress from './BillingAddress';

const AddressesContainer = (props) => {


    return (
        <div id="both-addresses-main-container" className="row justify-content-center">
            <ShippingAddress currentView={props.currentView} backView={props.backView}></ShippingAddress>
            <BillingAddress currentView={props.currentView} nextView={props.nextView}></BillingAddress>
        </div>
    )
}

export default AddressesContainer;