import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import EditButton from '../../components/edit-button/edit-button';
import CheckoutAddressModal from '../../components/checkout-address-modal/checkout-address-modal';

const BillingAddress = (props) => {
    const [billingShow, billingSetShow] = useState(false);
    const billingHandleShow = () => billingSetShow(!billingShow);

    return (
        <Form id="billing-address" className="col-xs-12 col-md-5 col-lg-4">
            <Form.Control className="border-dark rounded margin-bottom" value={props.billing_address.name} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={props.billing_address.address} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={props.billing_address.zipCode} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={props.billing_address.state} readonly="readonly"/>                
            <Form.Control className="border-dark rounded margin-bottom" value={props.billing_address.country} readonly="readonly"/>
            <EditButton className="col-12" onClick={props.billingHandleShow}>Change</EditButton>
            <CheckoutAddressModal type="billing" title="Billing Info" subtitle="Select one" show={billingShow} handleShow={billingHandleShow} url="/newBillingAdd" onClick={props.selectedBillingAddress}>
                billing
            </CheckoutAddressModal>
        </Form>
    )
}

export default BillingAddress;