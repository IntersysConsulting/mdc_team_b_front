import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import "../Checkout/checkout.css";
import {
  checkoutCustomerActions,
  checkoutOrderActions,
  checkoutOrderUpdateActions,
  postNewShipping,
  postNewBilling,
  cleanUp
} from "../../actions/checkoutActions";
import CheckoutTableDiv from "../../components/checkout-view-components/CheckoutTableDiv";
import CheckoutTitle from "../../components/checkout-view-components/CheckoutTitle";
import AddressesContainer from "../../components/checkout-view-components/AddressesContainter";
import CheckoutPayment from "../../components/checkout-view-components/CheckoutPayment";

const Checkout = () => {
  const [currentView, setCurrentView] = useState(0);

  const [shippingPostStatus, setShippingPostStatus] = useState({
    started: false,
    finished: false
  });
  const [billingPostStatus, setBillingPostStatus] = useState({
    started: false,
    finished: false
  });
  // const [canFinish, setCanFinish] = useState(false);
  const dispatch = useDispatch();
  // An enum of the implemented screens the checkout can go through
  const screens = {
    LOADING: 0,
    CHECKOUT_TABLE: 1,
    ADDRESS_SELECT: 2,
    PAYMENT_SELECT: 3,
    SUCCESS: 4,
    NO_PRODUCTS: 5,
    ERROR: 6
  };

  //#region Selectors

  const loading_order = useSelector(state => state.checkoutState.loading_order);
  const loading_customer = useSelector(
    state => state.checkoutState.loading_customer
  );
  const loading_put = useSelector(state => state.checkoutState.loading_put);
  const did_put_respond = useSelector(
    state => state.checkoutState.did_put_respond
  );
  const order = useSelector(state => state.checkoutState.order);
  const order_put_fields = useSelector(state => state.checkoutState.newOrder);
  const put_error = useSelector(state => state.checkoutState.put_error);
  const customer_error = useSelector(
    state => state.checkoutState.customer_error
  );
  const order_error = useSelector(state => state.checkoutState.order_error);
  const loading_shipping = useSelector(
    state => state.checkoutState.loading_shipping
  );
  const loading_billing = useSelector(
    state => state.checkoutState.loading_billing
  );
  const shipping_error = useSelector(
    state => state.checkoutState.post_shipping_error
  );
  const billing_error = useSelector(
    state => state.checkoutState.post_billing_error
  );

  const new_shipping = useSelector(state => state.checkoutState.new_shipping);
  const new_billing = useSelector(state => state.checkoutState.new_billing);

  //#endregion

  // Gets called once when the component loads
  useEffect(() => {
    dispatch(checkoutOrderActions());
    dispatch(checkoutCustomerActions());
  }, [dispatch]);

  useEffect(() => {
    if (currentView !== screens.SUCCESS) {
      if (loading_customer || loading_order) {
        setCurrentView(screens.LOADING);
      } else if (order.products.length > 0) {
        setCurrentView(screens.CHECKOUT_TABLE);
      } else if (!customer_error && !order_error) {
        setCurrentView(screens.NO_PRODUCTS);
      } else {
        setCurrentView(screens.ERROR);
      }
    }
  }, [
    loading_customer,
    loading_order,
    customer_error,
    order_error,
    order.products.length,
    screens.NO_PRODUCTS,
    screens.LOADING,
    screens.CHECKOUT_TABLE,
    screens.ERROR,
    screens.SUCCESS,
    currentView
  ]);

  useEffect(() => {
    if (loading_put) {
      setCurrentView(screens.LOADING);
    } else if (put_error !== undefined) {
      setCurrentView(screens.ERROR);
    }
  }, [loading_put, put_error, screens.ERROR, screens.LOADING]);

  useEffect(() => {
    if (shipping_error !== undefined || billing_error !== undefined) {
      setCurrentView(screens.ERROR);
    }
  }, [shipping_error, billing_error, screens.ERROR, screens.LOADING]);

  useEffect(() => {
    if (billing_error !== undefined || shipping_error !== undefined) {
      setCurrentView(screens.ERROR);
    } else {
      if (
        new_shipping !== undefined &&
        !loading_shipping &&
        !shippingPostStatus.started
      ) {
        // If we haven't started the post, there's something in the new address and we aren't already loading...
        setShippingPostStatus({ started: true, finished: false });
        dispatch(postNewShipping(new_shipping));
      } else if (
        shippingPostStatus.started &&
        !loading_shipping &&
        new_shipping === undefined
      ) {
        // If the post was started. We are finished loading, and new_billing was reset to undefined we finished posting.
        setShippingPostStatus({ started: true, finished: true });
      }
      if (
        new_billing !== undefined &&
        !loading_billing &&
        !billingPostStatus.started
      ) {
        // If we haven't started the post, there's something in the new address and we aren't already loading...
        setBillingPostStatus({ started: true, finished: false });
        dispatch(postNewBilling(new_billing));
      } else if (
        billingPostStatus.started &&
        !loading_billing &&
        new_billing === undefined
      ) {
        // If the post was started. We are finished loading, and new_billing was reset to undefined we finished posting.
        setBillingPostStatus({ started: true, finished: true });
      }
    }
  }, [
    shippingPostStatus,
    billingPostStatus,
    new_shipping,
    new_billing,
    loading_shipping,
    loading_billing,
    billing_error,
    shipping_error,
    screens.ERROR,
    dispatch
  ]);

  const finishOrder = () => {
    setCurrentView(screens.LOADING);
    let formData = new FormData();
    formData.set(
      "payment",
      order_put_fields.payment ? order_put_fields.payment : "payment"
    );
    formData.set(
      "user_billing",
      order_put_fields.billing_address ? order_put_fields.billing_address : 0
    );
    formData.set(
      "user_shipping",
      order_put_fields.shipping_address ? order_put_fields.shipping_address : 0
    );
    dispatch(checkoutOrderUpdateActions(formData));
  };

  // If the order finished right, we display the success screen.
  useEffect(() => {
    if (did_put_respond) setCurrentView(screens.SUCCESS);
  }, [did_put_respond, screens.SUCCESS]);

  //#region Screens

  const LoadingScreen = () => {
    return (
      <div className="container-fluid">
        <div className="checkout-spinner">
          <Spinner className="Spinner" animation="border" variant="warning" />
          <h1>
            {loading_customer
              ? "Fetching your data!"
              : loading_order
              ? "Fetching your order's data!"
              : loading_put
              ? "We're wrapping it up for you!"
              : loading_billing
              ? "We're updating your billing address"
              : loading_shipping
              ? "We're updating your shipping address"
              : "Wait a second please!"}
          </h1>
        </div>
      </div>
    );
  };

  const CheckoutTableScreen = () => {
    return (
      <div className="container-fluid">
        <CheckoutTableDiv
          products={order.products}
          currentView={currentView}
          setCurrentView={() => setCurrentView(screens.ADDRESS_SELECT)}
        ></CheckoutTableDiv>
      </div>
    );
  };

  const AddressSelectScreen = () => {
    return (
      <div className="container-fluid">
        <AddressesContainer
          currentView={currentView}
          backView={() => setCurrentView(screens.CHECKOUT_TABLE)}
          nextView={() => setCurrentView(screens.PAYMENT_SELECT)}
        ></AddressesContainer>
      </div>
    );
  };

  const PaymentSelectScreen = () => {
    return (
      <div className="container-fluid">
        <CheckoutPayment
          currentView={currentView}
          backView={() => setCurrentView(screens.ADDRESS_SELECT)}
          finishOrder={finishOrder}
        ></CheckoutPayment>
      </div>
    );
  };

  const SuccessScreen = () => {
    if (did_put_respond) {
      dispatch(cleanUp());
    }
    return (
      <div id="puchase-complete-whole">
        <div id="purchase-complete-title" className="text-center">
          <CheckoutTitle currentView={currentView}></CheckoutTitle>
        </div>
        <div>
          <p id="purchase-complete-text" className="text-center">
            Your order was successfully processed! You will receive an email
            shortly with your receipt.
          </p>
        </div>
      </div>
    );
  };

  const NoProductsScreen = () => {
    return (
      <div id="puchase-complete-whole">
        <div id="purchase-complete-title" className="text-center">
          <CheckoutTitle currentView={currentView}></CheckoutTitle>
        </div>
        <div>
          <p id="purchase-complete-text" className="text-center">
            Before we can work on your checkout process, you should head back to
            cart and confirm the order.
          </p>
        </div>
      </div>
    );
  };
  //#endregion

  //#region Return Selector
  if (loading_customer || loading_order) {
    return LoadingScreen();
  } else {
    switch (currentView) {
      case screens.LOADING: {
        return LoadingScreen();
      }
      case screens.CHECKOUT_TABLE: {
        return CheckoutTableScreen();
      }
      case screens.ADDRESS_SELECT: {
        return AddressSelectScreen();
      }
      case screens.PAYMENT_SELECT: {
        return PaymentSelectScreen();
      }
      case screens.SUCCESS: {
        return SuccessScreen();
      }
      case screens.NO_PRODUCTS: {
        return NoProductsScreen();
      }
      default: {
        return (
          <div className="container-fluid">
            <h1>
              Unexpected case {currentView}. <br />
              Errors:
              <br />
              {put_error ? "PUT ERROR: " + put_error : ""}
              <br />
              {customer_error ? "CUSTOMER ERROR:" + customer_error : ""}
              <br />
              {order_error ? "ORDER ERROR:" + order_error : ""}
              <br />
              {shipping_error ? "SHIPPING ERROR:" + shipping_error : ""}
              <br />
              {billing_error ? "BILLING ERROR:" + billing_error : ""}
            </h1>
          </div>
        );
      }
    }
  }
  //#endregion
};

export default Checkout;
