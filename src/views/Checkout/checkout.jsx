import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'
import '../Checkout/checkout.css';
import { checkoutCustomerActions, checkoutOrderActions, checkoutOrderUpdateActions} from '../../actions/checkoutActions';
import CheckoutTableDiv from '../../components/checkout-view-components/CheckoutTableDiv';
import CheckoutTitle from '../../components/checkout-view-components/CheckoutTitle';
import AddressesContainer from '../../components/checkout-view-components/AddressesContainter';
import CheckoutPayment from '../../views/payment/payment';


const Checkout = () => {

    const [currentView, setCurrentView] = useState(1);

    const loading_order = useSelector((state) => state.checkoutState.loading_order);
    const loading_customer = useSelector((state) => state.checkoutState.loading_customer);
    const loading_put = useSelector((state) => state.checkoutState.loading_put);
    const updated = useSelector((state) => state.checkoutState.updated);
    const order = useSelector((state) => state.checkoutState.order);
    const newOrder = useSelector((state) => state.checkoutState.newOrder)

    const dispatch = useDispatch();

    useEffect(() => {
        if(!loading_order){
            dispatch(checkoutOrderActions())
        }
    },[loading_order, dispatch]);

    useEffect(() => {
        if(!loading_order){
            dispatch(checkoutCustomerActions());
        }
    }, [loading_order, dispatch])

    useEffect(() =>  {
        if(order.products.length > 0 && !loading_customer && !loading_order){
            setCurrentView(1);
        }
        else if(order.products.length === 0){
            setCurrentView(5);
        }
    },[loading_customer, loading_order, order.products.length])

    const updateOrder = () =>  {
        setCurrentView(0)
        let formData = new FormData();
        formData.set('payment', newOrder.payment ? newOrder.payment : "payment");
        formData.set('user_billing', newOrder.billing_address ? newOrder.billing_address : 0);
        formData.set('user_shipping', newOrder.shipping_address ? newOrder.shipping_address : 0);
        dispatch(checkoutOrderUpdateActions(formData))
    }

    useEffect(() => {
        if(loading_put){
            setCurrentView(0)
        }
    }, [loading_put]);

    useEffect (() => {
        if(updated)
            setCurrentView(4)
    }, [updated])

    if(loading_customer || loading_order) {
        return(
            <div className="container-fluid">
                <div className="checkout-spinner">
                    <Spinner className="Spinner" animation="border" variant="warning"/>
                </div>
            </div>
        )
    }
    else {
        switch (currentView) {
            case 1: {
                return (
                    <div className="container-fluid">
                        <CheckoutTableDiv products={order.products} currentView={currentView} setCurrentView={() => setCurrentView(2)}></CheckoutTableDiv>
                    </div>
                );
            }
            case 2:{
                return (
                    <div className="container-fluid">
                        <AddressesContainer  currentView={currentView} backView={() => setCurrentView(1)} nextView={() => setCurrentView(3)}></AddressesContainer>
                    </div>
                );
            }
            case 3: {
                return (
                    <div className="container-fluid">
                        <CheckoutPayment currentView={currentView} backView={() => setCurrentView(2)} updateOrder={updateOrder}></CheckoutPayment>
                    </div>
                );
            }
            case 4: {
                return (
                    <div id="puchase-complete-whole">
                        <div id="purchase-complete-title" className="text-center">
                            <CheckoutTitle currentView={currentView}></CheckoutTitle>
                        </div>
                        <div>
                            <p id="purchase-complete-text" className="text-center">
                                Your order was successfully processed! You will receive an email shortly with your receipt.
                            </p>
                        </div>
                    </div>
                );
            }
            case 5: {
                return (
                    <div id="puchase-complete-whole">
                        <div id="purchase-complete-title" className="text-center">
                            <CheckoutTitle currentView={currentView}></CheckoutTitle>
                        </div>
                        <div>
                            <p id="purchase-complete-text" className="text-center">
                                Before we can work on your checkout process, you should head back to cart and confirm the order.
                            </p>
                        </div>
                    </div>
                )
            }
            default: {
                return (
                    <div className="container-fluid">
                        <div className="checkout-spinner">
                            <Spinner className="Spinner" animation="border" variant="warning"/>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default Checkout;