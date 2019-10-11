import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import EditButton from '../../components/edit-button/edit-button';
import CheckoutAddressModal from '../../components/checkout-address-modal/checkout-address-modal';

const ShippingAddress = (props) => {

    const order = useSelector((state) => state.checkoutState.order);
    const shipping_address =  useSelector((state) => state.checkoutState.shipping_address)

    const [shippingShow, shippingSetShow] = useState(false);
    const shippingHandleShow = () => shippingSetShow(!shippingShow);

    return (
        <Form id="shipping-address" className="col-xs-12 col-md-5 col-lg-4">
            <Form.Control className="border-dark rounded margin-bottom" value={order.shipping !== 0 ? shipping_address[order.shipping].name : shipping_address[0].first_name +" " +shipping_address[0].last_name} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={order.shipping !== 0 ? displayedShippingAddress.address : shipping_address[0].address} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={order.shipping !== 0 ? displayedShippingAddress.zipCode : shipping_address[0].zip_code} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={order.shipping !== 0 ? displayedShippingAddress.state : shipping_address[0].state} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={order.shipping !== 0 ? displayedShippingAddress.country : shipping_address[0].country} readonly="readonly"/>
            <EditButton className="col-12" onClick={props.shippingHandleShow}>Change</EditButton>
            <CheckoutAddressModal type="shipping" title="Shipping Info" subtitle="Select one" show={shippingShow} handleShow={shippingHandleShow} url="/newShippingAdd" onClick={selectedShippingAddress}>
                shipping
            </CheckoutAddressModal>
        </Form>
    )
}

export default ShippingAddress;