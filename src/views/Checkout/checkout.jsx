import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'
import '../Checkout/checkout.css';
import Title from '../../components/title/title';
import CheckoutTable from '../../components/checkout-table/checkout-table';
import PaymentCard from '../../components/payment-card/payment-card';
import AcceptButton from '../../components/accept-button/accept-button';
import { Form } from 'react-bootstrap';
import EditButton from '../../components/edit-button/edit-button';
import CheckoutAddressModal from '../../components/checkout-address-modal/checkout-address-modal';
import NextPageButton from '../../components/next-page-button/next-page-button';
import { checkoutShippingAddressActions } from '../../actions/checkoutActions';
import { checkoutBillingAddressActions } from '../../actions/checkoutActions';


var items = [
    { name: "Bear", price: "1000", qty: "5", total: "5000" },
    { name: "Belt of the lookout", price: "1800", qty: "2", total: "3600" },
    {
        name: "Lance of the bronze dragon",
        price: "50000",
        qty: "3",
        total: "150000"
    },
    { name: "Ring of the performer", price: "20000", qty: "1", total: "20000" }
];


const Checkout = () => {

    const loading = useSelector((state) => state.checkoutState.billing_loading);

    const [shippingShow, shippingSetShow] = useState(false);
    const shippingHandleShow = () => shippingSetShow(!shippingShow);

    const [billingShow, billingSetShow] = useState(false);
    const billingHandleShow = () => billingSetShow(!billingShow);

    const [currentView, setCurrentView] = useState(0);
    const changeCurrentView = () => setCurrentView(currentView + 1);

    const shipping_address = useSelector((state) => state.checkoutState.shipping_address);
    const billing_address = useSelector((state) => state.checkoutState.billing_address);

    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(checkoutShippingAddressActions());
        dispatch(checkoutBillingAddressActions());
    },[]);


    switch (currentView) {

        case 1: {
            return (
                <div className="container-fluid">

                    <div id="both-addresses-main-container" className="row justify-content-center">

                        <Form id="shipping-address" className="col-xs-12 col-md-5 col-lg-4">
                            <div id="shipping-address-title">
                                <Title>Shipping Address</Title>
                            </div>

                            <Form.Control className="border-dark rounded margin-bottom" defaultValue={shipping_address[0].first_name +" " +shipping_address[0].last_name}></Form.Control>
                            <Form.Control className="border-dark rounded margin-bottom" defaultValue={shipping_address[0].address}></Form.Control>
                            <Form.Control className="border-dark rounded margin-bottom" defaultValue={shipping_address[0].zip_code}></Form.Control>
                            <Form.Control className="border-dark rounded margin-bottom" defaultValue={shipping_address[0].state}></Form.Control>
                            <Form.Control className="border-dark rounded margin-bottom" defaultValue={shipping_address[0].country}></Form.Control>
                            <EditButton className="col-12" onClick={shippingHandleShow}>Change</EditButton>
                            <CheckoutAddressModal type="shipping" title="Shipping Info" subtitle="Select one" show={shippingShow} handleShow={shippingHandleShow} url="/newShippingAdd">
                                shipping
                        </CheckoutAddressModal>
                        </Form>

                        <Form id="billing-address" className="col-xs-12 col-md-5 col-lg-4">
                            <div id="billing-address-title">
                                <Title>Billing Address</Title>
                            </div>
                            <Form.Control className="border-dark rounded margin-bottom" defaultValue={billing_address[0].first_name +" " +billing_address[0].last_name}></Form.Control>
                            <Form.Control className="border-dark rounded margin-bottom" defaultValue={billing_address[0].address}></Form.Control>
                            <Form.Control className="border-dark rounded margin-bottom" defaultValue={billing_address[0].zip_code}></Form.Control>
                            <Form.Control className="border-dark rounded margin-bottom" defaultValue={billing_address[0].state}></Form.Control>
                            <Form.Control className="border-dark rounded margin-bottom" defaultValue={billing_address[0].country}></Form.Control>
                            <EditButton className="col-12" onClick={billingHandleShow}>Change</EditButton>
                            <CheckoutAddressModal type="billing" title="Billing Info" subtitle="Select one" show={billingShow} handleShow={billingHandleShow} url="/newBillingAdd">
                                billing
                        </CheckoutAddressModal>
                        </Form>

                    </div>

                    <div id="next-payment-button" className="text-right">
                        <NextPageButton className="text-right offset-right-4" title="Next" text="Payment" onClick={changeCurrentView} />
                    </div>

                </div>
            );
        }

        case 2: {
            return (

                <div className="container-fluid">

                    <div id="checkout-payment-title" className="offset-1">
                        <Title>Payment</Title>
                    </div>

                    <div id="payment-cards-table" className="row offset-1">

                        <div id="cards-table-left-side" className="col-xs-10 col-md-5 col-lg-4">
                            <PaymentCard number="**** **** **** 2312" owner="John Smith"></PaymentCard>
                            <PaymentCard number="**** **** **** 1432" owner="Clara Smith"></PaymentCard>
                            <PaymentCard number="**** **** **** 1875" owner="John Smith"></PaymentCard>
                        </div>

                        <div id="cards-table-right-side" className="col-xs-10 col-md-5 col-lg-4">
                            <PaymentCard number="**** **** **** 9082" owner="Elizabet Winter"></PaymentCard>
                            <PaymentCard number="**** **** **** 5567" owner="Clara Smith"></PaymentCard>
                            <PaymentCard number="**** **** **** 5422" owner="John Smith"></PaymentCard>
                        </div>

                    </div>

                    <a id="new-card-link" className="text-left offset-1" href="/checkout/newcard">Add new card</a>

                    <div id="finish-order-button" className="text-right">
                        <AcceptButton className="col-xs-12 col-md-6 col-lg-3" onClick={changeCurrentView} border="primary">Finish order</AcceptButton>
                    </div>

                </div>

            );
        }

        case 3: {
            return (
                <div id="puchase-complete-whole">

                    <div id="purchase-complete-title" className="text-center">
                        <Title>Purchase Complete</Title>
                    </div>

                    <div>
                        <p id="purchase-complete-text" className="text-center">
                            Your order was successfully processed! You will receive an email shortly with your receipt.
                            </p>
                    </div>


                </div>
            );
        }

        default: {

            let mainView = null;

            (loading) ? mainView = (
                <div className="container-fluid">

                <Title>Order Summary</Title>

                <div id="checkout-table" className="col-10 offset-1">
                    <CheckoutTable products={items}></CheckoutTable>
                </div>

                <div id ="next-addresses-button-loading" className="text-right">
                    <Spinner className="Spinner" animation="border" variant="warning"/>
                </div>

            </div>
            )
            : mainView = (
                <div className="container-fluid">

                <Title>Order Summary</Title>

                <div id="checkout-table" className="col-10 offset-1">
                    <CheckoutTable products={items}></CheckoutTable>
                </div>

                <div id="next-addresses-button" className="text-right offset-right-4">
                    <NextPageButton title="Next" text="Shipping and Billing" onClick={changeCurrentView} />
                </div>

            </div>
            )

            return (
                <div>
                    {mainView}
                </div>
            )

        }
    }




}

export default Checkout;