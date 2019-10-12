import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import EditButton from '../../components/edit-button/edit-button';
import CheckoutAddressModal from '../../components/checkout-address-modal/checkout-address-modal';

const ShippingAddress = (props) => {

    const address = useSelector((state) => state.checkoutState.shipping_address);
    const [shippingShow, shippingSetShow] = useState(false);
    const shippingHandleShow = () => shippingSetShow(!shippingShow);

    return (
        <Form id="shipping-address" className="col-xs-12 col-md-5 col-lg-4">
            <Form.Control className="border-dark rounded margin-bottom" value={address.first_name + " " + address.last_name} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={address.address} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={address.zipCode} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={address.state} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={address.country} readonly="readonly"/>
            <EditButton className="col-12" onClick={props.shippingHandleShow}>Change</EditButton>
            <CheckoutAddressModal type="shipping" title="Shipping Info" subtitle="Select one" show={shippingShow} handleShow={shippingHandleShow} url="/newShippingAdd" onClick={props.selectedShippingAddress}>
                shipping
            </CheckoutAddressModal>
        </Form>
    )
}

export default ShippingAddress;