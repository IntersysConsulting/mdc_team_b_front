import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import EditButton from '../../components/edit-button/edit-button';
import CheckoutAddressModal from '../../components/checkout-address-modal/checkout-address-modal';
import CheckoutTitle from './CheckoutTitle';
import BackPageButton from '../back-page-button/back-page-button';

const ShippingAddress = (props) => {

    const address = useSelector((state) => state.checkoutState.order.shipping_address);
    const [shippingShow, setShippingShow] = useState(false);
    const shippingHandleShow = () => setShippingShow(!shippingShow);

    return (
        <Form id="shipping-address" className="col-xs-12 col-md-5 col-lg-4">
            <CheckoutTitle currentView={props.currentView} shipping={true}></CheckoutTitle>
            <Form.Control className="border-dark rounded margin-bottom" value={address.first_name + " " + address.last_name} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={address.address} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={address.zip_code} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={address.state} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={address.country} readonly="readonly"/>
            <EditButton className="col-12" onClick={shippingHandleShow}>Change</EditButton>
            <CheckoutAddressModal type="shipping" title="Shipping Info" subtitle="Select one" show={shippingShow} handleShow={shippingHandleShow} url="/newShippingAdd">
                shipping
            </CheckoutAddressModal>
            <div className="div-back-button">
                <BackPageButton className="text-right offset-right-4" title="Back" text="Checkout Table" onClick={props.backView} />
            </div>
        </Form>
    )
}

export default ShippingAddress;