import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShippingAddress from "./ShippingAddress";
import BillingAddress from "./BillingAddress";
import NextPageButton from "../next-page-button/next-page-button";
import BackPageButton from "../back-page-button/back-page-button";
import {
  setPostAddresses,
  setNewBilling,
  setNewShipping
} from "../../actions/checkoutActions";

const AddressesContainer = props => {
  const dispatch = useDispatch();
  // const new_shipping = useSelector(state => state.checkoutState.new_shipping);
  // const new_billing = useSelector(state => state.checkoutState.new_billing);

  useEffect(() => {
    dispatch(setPostAddresses(false));
    dispatch(setNewBilling(undefined));
    dispatch(setNewShipping(undefined));
  }, []);

  const onNextPage = () => {
    dispatch(setPostAddresses(true));
    setTimeout(props.nextView, 750);
  };

  return (
    <div id="both-addresses-main-container">
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
            className="text-right offset-right-4"
            title="Next"
            text="Payment"
            onClick={onNextPage}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressesContainer;
