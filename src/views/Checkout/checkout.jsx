import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'
import '../Checkout/checkout.css';
import PaymentCard from '../../components/payment-card/payment-card';
import AcceptButton from '../../components/accept-button/accept-button';
import NextPageButton from '../../components/next-page-button/next-page-button';
import { checkoutCustomerActions, checkoutOrderActions} from '../../actions/checkoutActions';


const Checkout = () => {

    const loading_order = useSelector((state) => state.checkoutState.loading_order);
    const loading_customer = useSelector((state) => state.checkoutState.loading_customer);

    const [currentView, setCurrentView] = useState(0);
    const changeCurrentView = () => setCurrentView(currentView + 1);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(checkoutCustomerActions());
        dispatch(checkoutOrderActions())
    }, [dispatch]);

    useEffect(() =>{
        if(!loading_order && !loading_customer){
            console.log(loading_order)
            console.log(loading_customer)
            setCurrentView(currentView + 1)
        }
    }, [loading_customer, loading_order])

    if(loading_customer || loading_order){
        return (
            <div className="container-fluid">
                <Spinner className="Spinner" animation="border" variant="warning"/>
            </div>
        )

    }
    else{
        switch (currentView) {

            case 1: {
                return (
                    <div className="container-fluid">
    
                        <div id="both-addresses-main-container" className="row justify-content-center">
    
    
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
    
                        
    
                        <div>
                            <p id="purchase-complete-text" className="text-center">
                                Your order was successfully processed! You will receive an email shortly with your receipt.
                                </p>
                        </div>
    
    
                    </div>
                );
            }
    
            default: {
    
                return (
                    <div>
                        {/*mainView*/}
                    </div>
                )
    
            }
        }
    
    

    }

}

export default Checkout;