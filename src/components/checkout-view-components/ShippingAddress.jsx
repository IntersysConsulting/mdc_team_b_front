import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form /*, FormGroup, FormLabel, Row, Col*/ } from "react-bootstrap";
import EditButton from "../../components/edit-button/edit-button";
import CheckoutAddressModal from "../../components/checkout-address-modal/checkout-address-modal";
import CheckoutTitle from "./CheckoutTitle";
import AddressForm from "../address-form/address-form";

const ShippingAddress = props => {
  const address = useSelector(state => state.checkoutState.shipping_address);
  const [shippingShow, setShippingShow] = useState(false);
  const shippingHandleShow = () => setShippingShow(!shippingShow);
  const [selectedIndex /*, setSelectedIndex*/] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState({
    first_name: undefined,
    last_name: undefined,
    address: undefined,
    country: undefined,
    zip_code: undefined,
    city: undefined,
    state: undefined,
    delivery_notes: undefined,
    between: undefined
  });

  const NO_ADDRESS = {
    first_name: undefined,
    last_name: undefined,
    address: undefined,
    country: undefined,
    zip_code: undefined,
    city: undefined,
    state: undefined,
    delivery_notes: undefined,
    between: undefined
  };

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
          type="shipping"
        ></AddressForm>
        <EditButton className="col-12" onClick={shippingHandleShow}>
          Change
        </EditButton>
        <CheckoutAddressModal
          type="shipping"
          title="Shipping Info"
          subtitle="Select one"
          show={shippingShow}
          handleShow={shippingHandleShow}
          url="/newShippingAdd"
        >
          shipping
        </CheckoutAddressModal>
      </div>
    );
  };

  const NoAddressForm = () => {
    return (
      <div>
        <AddressForm values={selectedAddress} type="shipping"></AddressForm>
      </div>
    );
  };

  return (
    <Form id="shipping-address" className="col-xs-12 col-md-5 col-lg-4">
      <CheckoutTitle
        currentView={props.currentView}
        shipping={true}
      ></CheckoutTitle>

      {address && address.length > 0
        ? NewDisplayAddressForm()
        : NoAddressForm()}
    </Form>
  );
};

export default ShippingAddress;
