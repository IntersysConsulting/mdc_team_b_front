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

  const shippingInfo = () => {
    if (selectedAddress !== undefined) {
      return [
        {
          field: "First Name",
          value: selectedAddress.first_name
        },
        { field: "Last Name", value: selectedAddress.last_name },
        { field: "Address", value: selectedAddress.address },
        { field: "Between", value: selectedAddress.between },
        { field: "Zip Code", value: selectedAddress.zip_code },
        { field: "Country", value: selectedAddress.country },
        { field: "State", value: selectedAddress.state },
        { field: "City", value: selectedAddress.city },
        {
          field: "Delivery Notes",
          value: selectedAddress.delivery_notes,
          textarea: true
        }
      ];
    } else {
      return [
        {
          field: "First Name",
          value: undefined
        },
        { field: "Last Name", value: undefined },
        { field: "Address", value: undefined },
        { field: "Between", value: undefined },
        { field: "Zip Code", value: undefined },
        { field: "Country", value: undefined },
        { field: "State", value: undefined },
        { field: "City", value: undefined },
        { field: "Delivery Notes", value: undefined, textarea: true }
      ];
    }
  };

  useEffect(() => {
    if (address !== undefined && address.length >= selectedIndex) {
      setSelectedAddress(address[selectedIndex]);
    } else {
      setSelectedAddress({
        first_name: undefined,
        last_name: undefined,
        country: undefined,
        address: undefined,
        zip_code: undefined,
        city: undefined,
        state: undefined,
        between: undefined,
        delivery_notes: undefined
      });
    }
  }, [address, selectedIndex]);

  const NewDisplayAddressForm = () => {
    return (
      <div>
        <AddressForm
          values={shippingInfo()}
          readonly
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
        <AddressForm values={shippingInfo()} type="shipping"></AddressForm>
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
