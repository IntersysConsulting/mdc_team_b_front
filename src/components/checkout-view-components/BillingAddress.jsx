import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import EditButton from '../../components/edit-button/edit-button';
import CheckoutAddressModal from '../../components/checkout-address-modal/checkout-address-modal';
import CheckoutTitle from './CheckoutTitle';
import NextPageButton from '../next-page-button/next-page-button';

const BillingAddress = (props) => {
    const [billingShow, billingSetShow] = useState(false);
    const billingHandleShow = () => billingSetShow(!billingShow);
    const address = useSelector((state) => state.checkoutState.billing_address)

    return (
        <Form id="billing-address" className="col-xs-12 col-md-5 col-lg-4">
            <CheckoutTitle currentView={props.currentView} shipping={false}></CheckoutTitle>
            <Form.Control className="border-dark rounded margin-bottom" value={address.length > 0 ? (address[0].first_name + " " + address[0].last_name) : ""} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={address.length > 0 ? address[0].address : ""} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={address.length > 0 ? address[0].zip_code : ""} readonly="readonly"/>
            <Form.Control className="border-dark rounded margin-bottom" value={address.length > 0 ? address[0].state : ""} readonly="readonly"/>                
            <Form.Control className="border-dark rounded margin-bottom" value={address.length > 0 ?  address[0].country : ""} readonly="readonly"/>
            <EditButton className="col-12" onClick={billingHandleShow}>Change</EditButton>
            <CheckoutAddressModal type="billing" title="Billing Info" subtitle="Select one" show={billingShow} handleShow={billingHandleShow} url="/newBillingAdd">
                billing
            </CheckoutAddressModal>
            <div className="div-next-button">
                <NextPageButton className="text-right offset-right-4" title="Next" text="Payment" onClick={props.nextView} />
            </div>
        </Form>
    )
}

export default BillingAddress;