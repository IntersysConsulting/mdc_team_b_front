import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShippingAddress from "./ShippingAddress";
import BillingAddress from "./BillingAddress";
import GuestInfoForm from "../guest-info-form/guest-info-form";
import NextPageButton from "../next-page-button/next-page-button";
import BackPageButton from "../back-page-button/back-page-button";
import {
  setRequestContinue,
  cleanUp
} from "../../actions/checkoutAddressActions";

const AddressesContainer = props => {
  const dispatch = useDispatch();

  // const role = useSelector(state => state.authenticationState.role);
  const [nextEnabled, setNextEnabled] = useState(true);

  const shipping_continue = useSelector(
    state => state.checkoutAddressState.shipping_continue
  );
  const billing_continue = useSelector(
    state => state.checkoutAddressState.billing_continue
  );
  const info_continue = useSelector(
    state => state.checkoutAddressState.info_continue
  );

  const onNextPage = () => {
    // Disables the button to prevent multiple triggers
    setNextEnabled(false);
    // Requests the GuestInfoForm, ShippingAddress and BillingAddress to report back
    dispatch(setRequestContinue(true));
    // After a second, it reenables the button in case it fails
    setTimeout(() => {
      setNextEnabled(true);
    }, 1000);
  };

  useEffect(() => {
    if (shipping_continue && billing_continue && info_continue) {
      // Queues a clean up that will not mess up with this method
      setTimeout(() => {
        dispatch(cleanUp());
      }, 100);
      // Goes to the next screen
      props.nextView();
    }
  }, [shipping_continue, billing_continue, info_continue, dispatch, props]);

  return (
    <div id="both-addresses-main-container">
      <GuestInfoForm />
      <div className="row justify-content-center">
        <ShippingAddress
          currentView={props.currentView}
          backView={props.backView}
        ></ShippingAddress>
        <BillingAddress
          currentView={props.currentView}
          nextView={props.nextView}
        ></BillingAddress>
      </div>
      <div className="row justify-content-center">
        <div className="div-back-button col col-md-5 col-lg-4">
          <BackPageButton
            className="text-right offset-right-4"
            title="Back"
            text="Checkout Table"
            onClick={props.backView}
          />
        </div>
        <div className="div-next-button col col-md-5 col-lg-4">
          <NextPageButton
            className={"text-right offset-right-4"}
            title="Next"
            text="Payment"
            onClick={onNextPage}
            disabled={!nextEnabled}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressesContainer;
