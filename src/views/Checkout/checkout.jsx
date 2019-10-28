import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import "../Checkout/checkout.css";
import {
  checkoutCustomerActions,
  checkoutOrderActions,
  checkoutOrderUpdateActions,
  cleanUp
} from "../../actions/checkoutActions";
import {
  cleanUp as AddressCleanUp,
  toastReset
} from "../../actions/checkoutAddressActions";

import {
  cleanUp as PaymentCleanUp,
} from "../../actions/paymentActions";

import CheckoutTableDiv from "../../components/checkout-view-components/CheckoutTableDiv";
import CheckoutTitle from "../../components/checkout-view-components/CheckoutTitle";
import AddressesContainer from "../../components/checkout-view-components/AddressesContainter";
import UserPayment from '../../views/payment/payment';
import GuestPayment from '../../views/payment/guest-payment';
import Toast from "../../components/toast/toast";

const Checkout = () => {
  const [currentView, setCurrentView] = useState(0);
  const [preventViewChange, setPreventViewChange] = useState(false);

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

  //#region Loading Selectors
  // Waiting on Order GET ?
  const loading_order = useSelector(state => state.checkoutState.loading_order);
  // Did Order GET return an error ?
  const order_error = useSelector(state => state.checkoutState.order_error);
  // Waiting on Customer GET ?
  const loading_customer = useSelector(
    state => state.checkoutState.loading_customer
  );
  // Did Customer GET return an error ?
  const customer_error = useSelector(
    state => state.checkoutState.customer_error
  );
  // Waiting on Order PUT ?
  const loading_put = useSelector(state => state.checkoutState.loading_put);
  // Did PUT return an error?
  const put_error = useSelector(state => state.checkoutState.put_error);
  // Signals that we can proceed to the final screen.
  const did_put_respond = useSelector(
    state => state.checkoutState.did_put_respond
  );
  const role = useSelector(state => state.authenticationState.role);
  //#endregion

  //#region Address Container Selectors
  // These are used to prompt success/error messages
  // But not just yet. Will be Uncommented on next Commit.
  // TODO:
  const shipping_toast = useSelector(
    state => state.checkoutAddressState.shipping_toast
  );
  const billing_toast = useSelector(
    state => state.checkoutAddressState.billing_toast
  );
  const info_toast = useSelector(
    state => state.checkoutAddressState.info_toast
  );

  const shipping_error = useSelector(
    state => state.checkoutAddressState.shipping_error
  );
  const billing_error = useSelector(
    state => state.checkoutAddressState.billing_error
  );
  const info_error = useSelector(
    state => state.checkoutAddressState.info_error
  );

  const payment_completed = useSelector(
    state => state.paymentState.payment_completed
  );

  const payment_attempted = useSelector(
    state => state.paymentState.payment_attempted
  );

  const [toasts, setToasts] = useState([]);

  const pushToast = useCallback(
    toast => {
      console.log("callback push");
      var tmp = [...toasts, toast];
      setToasts(tmp);
    },
    [toasts]
  );

  const unshiftToast = useCallback(() => {
    console.log("callback pop");
    var tmp = [...toasts];
    tmp.unshift();
    setToasts(tmp);
  }, [toasts]);

  //#region Toast Making UseEffects

  const [hasToasted, setHasToasted] = useState({
    shipping_toast: false,
    billing_toast: false,
    info_toast: false,
    shipping_error: false,
    billing_error: false,
    info_error: false
  });

  useEffect(() => {
    if (shipping_toast && !hasToasted.shipping_toast) {
      setHasToasted({ ...hasToasted, shipping_toast: true });
      pushToast(
        <Toast
          title={"Succesfully added your shipping address!"}
          body={"Your new shipping address is ready to go!"}
          type="success"
          show={true}
        ></Toast>
      );
      setTimeout(() => {
        unshiftToast();
      }, 10000);
    }
  }, [shipping_toast, pushToast, unshiftToast, hasToasted]);

  useEffect(() => {
    if (billing_toast && !hasToasted.billing_toast) {
      setHasToasted({ ...hasToasted, billing_toast: true });
      pushToast(
        <Toast
          title={"Succesfully added your billing address!"}
          body={"Your new billing address is ready to go!"}
          type="success"
          show={true}
        ></Toast>
      );
      setTimeout(() => {
        unshiftToast();
      }, 10000);
    }
  }, [billing_toast, pushToast, unshiftToast, hasToasted]);
  useEffect(() => {
    if (info_toast && !hasToasted.info_toast) {
      setHasToasted({ ...hasToasted, info_toast: true });
      if (role === "guest") {
        pushToast(
          <Toast
            title={"Succesfully added your customer information!"}
            body={"You are ready to go!"}
            type="success"
            show={true}
          ></Toast>
        );
        setTimeout(() => {
          unshiftToast();
        }, 10000);
      }
    }
  }, [info_toast, pushToast, unshiftToast, hasToasted, role]);
  useEffect(() => {
    if (shipping_error !== undefined && !hasToasted.shipping_error) {
      setHasToasted({ ...hasToasted, shipping_error: true });
      pushToast(
        <Toast
          title={"We could not add your shipping address."}
          body={"We had an issue: " + shipping_error}
          type="error"
          show={true}
        ></Toast>
      );
      setTimeout(() => {
        unshiftToast();
      }, 10000);
    }
  }, [shipping_error, pushToast, unshiftToast, hasToasted]);
  useEffect(() => {
    if (billing_error !== undefined && !hasToasted.billing_error) {
      setHasToasted({ ...hasToasted, billing_error: true });
      pushToast(
        <Toast
          title={"We could not add your billing address."}
          body={"We had an issue: " + billing_error}
          type="error"
          show={true}
        ></Toast>
      );
      setTimeout(() => {
        unshiftToast();
      }, 10000);
    }
  }, [billing_error, pushToast, unshiftToast, hasToasted]);
  useEffect(() => {
    if (info_error !== undefined && !hasToasted.info_error) {
      setHasToasted({ ...hasToasted, info_error: true });
      pushToast(
        <Toast
          title={"We could not add your customer information."}
          body={"We had an issue: " + info_error}
          type="error"
          show={true}
        ></Toast>
      );
      setTimeout(() => {
        unshiftToast();
      }, 10000);
    }
  }, [info_error, pushToast, unshiftToast, hasToasted]);

  //#endregion

  //#endregion

  // #region Information Selectors
  const order = useSelector(state => state.checkoutState.order); // Know about the GET
  const order_put_fields = useSelector(state => state.checkoutState.newOrder); // Fields for the PUT

  //#endregion
  //#region UseEffects
  // Gets called once when the component loads
  useEffect(() => {
    // To make sure the state is clean we tidy it up when we first load
    dispatch(cleanUp());
    dispatch(AddressCleanUp());
    // Then we GET the data we need
    dispatch(checkoutOrderActions());
    dispatch(checkoutCustomerActions());
  }, [dispatch]);

  // Is used while loading the component, waits on the two dispatches above.
  useEffect(() => {
    const DetermineFirstScreen = () => {
      if (loading_customer || loading_order) {
        setCurrentView(screens.LOADING);
      } else if (order.products.length > 0) {
        setCurrentView(screens.CHECKOUT_TABLE);
      } else if (!customer_error && !order_error) {
        setCurrentView(screens.NO_PRODUCTS);
      } else {
        setCurrentView(screens.ERROR);
      }
    };

    if (!preventViewChange) {
      DetermineFirstScreen();
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
    preventViewChange
  ]);

  // Is used while PUTting the Order. If it fails it loads the error screen.
  // The success screen is handled in the next useEffect
  useEffect(() => {
    if (loading_put) {
      setCurrentView(screens.LOADING);
    } else if (put_error !== undefined) {
      setCurrentView(screens.ERROR);
    }
  }, [loading_put, put_error, screens.ERROR, screens.LOADING]);

  // If the order finished right, we display the success screen.
  useEffect(() => {
      if(payment_completed){
        dispatch(toastReset());
        setPreventViewChange(true);
        setCurrentView(screens.SUCCESS);
      }
      else{
        if(payment_attempted){
          console.log("Error in payment!");
        }
      }
  }, [payment_completed, screens.SUCCESS, dispatch]);

  //#endregion

  const finishOrder = (stripeInfo) => {
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
    dispatch(checkoutOrderUpdateActions(formData, stripeInfo));
  };

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
        {/* <Toast title="bear" body="Bearington" show={true} /> */}
        <AddressesContainer
          currentView={currentView}
          backView={() => setCurrentView(screens.CHECKOUT_TABLE)}
          nextView={() => setCurrentView(screens.PAYMENT_SELECT)}
        ></AddressesContainer>
      </div>
    );
  };

  const PaymentSelectScreen = () => {
    if(role === "registeredUser"){
      return (
        <div className="container-fluid">
          <UserPayment
            currentView={currentView}
            backView={() => setCurrentView(screens.ADDRESS_SELECT)}
            finishOrder={finishOrder}
          ></UserPayment>
        </div>
      );
    }
    else{
      return (
        <div className="container-fluid">
          <GuestPayment
            currentView={currentView}
            backView={() => setCurrentView(screens.ADDRESS_SELECT)}
            finishOrder={finishOrder}
          ></GuestPayment>
        </div>
      );
    }
  };

  const SuccessScreen = () => {
    if (payment_completed) {
      dispatch(cleanUp());
      dispatch(PaymentCleanUp());
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

  const ErrorScreen = () => {
    return (
      <div className="container-fluid">
        <h1>
          Error Code: {currentView}. <br />
          Errors:
          <br />
          {put_error ? "PUT ERROR: " + put_error : ""}
          <br />
          {customer_error ? "CUSTOMER ERROR:" + customer_error : ""}
          <br />
          {order_error ? "ORDER ERROR:" + order_error : ""}
        </h1>
      </div>
    );
  };
  //#endregion

  const SelectScreen = () => {
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
          return ErrorScreen();
        }
      }
    }
  };

  return (
    <div>
      <div className="toast-container">{toasts}</div>
      {SelectScreen()}
    </div>
  );

  //#region Return Selector

  //#endregion
};

export default Checkout;
