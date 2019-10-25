import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import EditButton from "../../components/edit-button/edit-button";
import CheckoutAddressModal from "../../components/checkout-address-modal/checkout-address-modal";
import CheckoutTitle from "./CheckoutTitle";
import AddressForm from "../address-form/address-form";

const BillingAddress = props => {
  const [billingShow, billingSetShow] = useState(false);
  const [selectedIndex /*, setSelectedIndex*/] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState({
    first_name: undefined,
    last_name: undefined,
    country: undefined,
    address: undefined,
    zip_code: undefined,
    city: undefined,
    state: undefined
  });

  const NO_ADDRESS = {
    first_name: undefined,
    last_name: undefined,
    country: undefined,
    address: undefined,
    zip_code: undefined,
    city: undefined,
    state: undefined
  };

  const billingHandleShow = () => billingSetShow(!billingShow);
  const address = useSelector(state => state.checkoutState.billing_address);

  useEffect(() => {
    if (address !== undefined && address.length >= selectedIndex) {
      setSelectedAddress(address[selectedIndex]);
    } else {
      setSelectedAddress(NO_ADDRESS);
    }
  }, [address, selectedIndex]);

  const NewDisplayAddressForm = () => {
    return (
      <div>
        <AddressForm
          values={selectedAddress}
          readonly={true}
          type="billing"
        ></AddressForm>
        <EditButton className="col-12" onClick={billingHandleShow}>
          Change
        </EditButton>
        <CheckoutAddressModal
          type="billing"
          title="Billing Info"
          subtitle="Select one"
          show={billingShow}
          handleShow={billingHandleShow}
          url="/newBillingAdd"
        >
          billing
        </CheckoutAddressModal>
      </div>
    );
  };

  const NoAddressForm = () => {
    return <AddressForm values={selectedAddress} type="billing" />;
  };

  return (
    <Form id="billing-address" className="col-xs-12 col-md-5 col-lg-4">
      <CheckoutTitle
        currentView={props.currentView}
        shipping={false}
      ></CheckoutTitle>
      {address && address.length > 0
        ? NewDisplayAddressForm()
        : NoAddressForm()}
    </Form>
  );
};

export default BillingAddress;
