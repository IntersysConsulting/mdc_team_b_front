import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postShippingActions,
  shippingCanContinue,
  postBillingActions,
  billingCanContinue
} from "../../actions/checkoutAddressActions";
import { Form, FormGroup, FormLabel, Row, Col } from "react-bootstrap";
import "./address-form.css";

const AddressForm = props => {
  const [formData, setFormData] = useState({
    first_name: undefined,
    last_name: undefined,
    address: undefined,
    between: undefined,
    zip_code: undefined,
    country: undefined,
    state: undefined,
    city: undefined,
    delivery_notes: undefined
  });

  const NoAddress = {
    first_name: undefined,
    last_name: undefined,
    address: undefined,
    between: undefined,
    zip_code: undefined,
    country: undefined,
    state: undefined,
    city: undefined,
    delivery_notes: undefined
  };

  useEffect(() => {
    if (props.values !== undefined) {
      setFormData(props.values);
    } else {
      setFormData(NoAddress);
    }
  }, [props.values]);

  const StaticOnChange = e => {
    let tmpData = { ...formData };
    tmpData[e.target.id] = e.target.value;
    setFormData(tmpData);
  };

  // Known Control IDs by passed name
  const knownControlIds = {
    first_name: "first_name",
    last_name: "last_name",
    address: "address",
    between: "between",
    zip_code: "zip_code",
    country: "country",
    state: "state",
    city: "city",
    delivery_notes: "delivery_notes"
  };

  const dispatch = useDispatch();

  //#region New Format Selectors
  const continueRequested = useSelector(
    state => state.checkoutAddressState.continue_requested
  );

  const billing_loading = useSelector(
    state => state.checkoutAddressState.billing_loading
  );
  const billing_canContinue = useSelector(
    state => state.checkoutAddressState.billing_continue
  );
  const shipping_loading = useSelector(
    state => state.checkoutAddressState.shipping_loading
  );
  const shipping_canContinue = useSelector(
    state => state.checkoutAddressState.shipping_continue
  );
  //#endergion

  //#region New Format Poster
  useEffect(() => {
    const isFormValid = () => {
      var checkingForm;
      if (props.type === "shipping") {
        checkingForm = {
          first_name: formData.first_name,
          last_name: formData.last_name,
          address: formData.address,
          country: formData.country,
          zip_code: formData.zip_code,
          city: formData.city,
          state: formData.state,
          delivery_notes: formData.delivery_notes,
          between: formData.between
        };
      } else {
        checkingForm = {
          first_name: formData.first_name,
          last_name: formData.last_name,
          address: formData.address,
          country: formData.country,
          zip_code: formData.zip_code,
          city: formData.city,
          state: formData.state
        };
      }
      for (var key in checkingForm) {
        if (formData[key] === undefined) {
          return false;
        }
      }
      return true;
    };
    // If Can Post, Should Post, and Data is Valid...
    var isValid = isFormValid();
    if (
      (props.readonly === undefined || props.readonly === false) &&
      continueRequested &&
      isValid
    ) {
      if (
        props.type === "billing" &&
        !billing_canContinue &&
        !billing_loading
      ) {
        dispatch(postBillingActions(formData));
      } else if (
        props.type === "shipping" &&
        !shipping_canContinue &&
        !shipping_loading
      ) {
        dispatch(postShippingActions(formData));
      }
    } else if (props.readonly !== undefined && props.readonly === true) {
      if (props.type === "billing") {
        dispatch(billingCanContinue());
      } else if (props.type === "shipping") {
        dispatch(shippingCanContinue());
      }
    }
  }, [
    formData,
    props.readonly,
    continueRequested,
    props.type,
    billing_canContinue,
    shipping_canContinue,
    dispatch
  ]);
  //#endregion

  // #region Forms

  const ShippingForm = () => {
    return (
      <Form className="address-display">
        <FormGroup as={Row} className="rounded">
          <FormLabel column>First Name</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your First Name"}
              value={formData.first_name}
              readonly={
                props.readonly ||
                (props.type === "shipping" &&
                  (shipping_loading || shipping_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.first_name === undefined ||
                formData.first_name.length < 1
              }
              id={knownControlIds.first_name}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>Last Name</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your Last Name"}
              value={formData.last_name}
              readonly={
                props.readonly ||
                (props.type === "shipping" &&
                  (shipping_loading || shipping_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.last_name === undefined ||
                formData.last_name.length < 1
              }
              id={knownControlIds.last_name}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>Address</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your Address"}
              value={formData.address}
              readonly={
                props.readonly ||
                (props.type === "shipping" &&
                  (shipping_loading || shipping_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.address === undefined || formData.address.length < 1
              }
              id={knownControlIds.address}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>Between</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your Between"}
              value={formData.between}
              readonly={
                props.readonly ||
                (props.type === "shipping" &&
                  (shipping_loading || shipping_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.between === undefined || formData.between.length < 1
              }
              id={knownControlIds.between}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>Zip Code</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your Zip Code"}
              value={formData.zip_code}
              readonly={
                props.readonly ||
                (props.type === "shipping" &&
                  (shipping_loading || shipping_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.zip_code === undefined || formData.zip_code.length < 1
              }
              id={knownControlIds.zip_code}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>Country</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your Country"}
              value={formData.country}
              readonly={
                props.readonly ||
                (props.type === "shipping" &&
                  (shipping_loading || shipping_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.country === undefined || formData.country.length < 1
              }
              id={knownControlIds.country}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>State</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your State"}
              value={formData.state}
              readonly={
                props.readonly ||
                (props.type === "shipping" &&
                  (shipping_loading || shipping_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.state === undefined || formData.state.length < 1
              }
              id={knownControlIds.state}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>City</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your City"}
              value={formData.city}
              readonly={
                props.readonly ||
                (props.type === "shipping" &&
                  (shipping_loading || shipping_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.city === undefined || formData.city.length < 1
              }
              id={knownControlIds.city}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>Delivery Notes</FormLabel>
          <Col>
            <Form.Control
              as="textarea"
              placeholder={"Enter your Delivery Notes"}
              value={formData.delivery_notes}
              readonly={
                props.readonly ||
                (props.type === "shipping" &&
                  (shipping_loading || shipping_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.delivery_notes === undefined ||
                formData.delivery_notes.length < 1
              }
              id={knownControlIds.delivery_notes}
              rows={3}
            />
          </Col>
        </FormGroup>
      </Form>
    );
  };

  const BillingForm = () => {
    return (
      <Form className="address-display">
        <FormGroup as={Row} className="rounded">
          <FormLabel column>First Name</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your First Name"}
              value={formData.first_name}
              readonly={
                props.readonly ||
                (props.type === "billing" &&
                  (billing_loading || billing_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.first_name === undefined ||
                formData.first_name.length < 1
              }
              id={knownControlIds.first_name}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>Last Name</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your Last Name"}
              value={formData.last_name}
              readonly={
                props.readonly ||
                (props.type === "billing" &&
                  (billing_loading || billing_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.last_name === undefined ||
                formData.last_name.length < 1
              }
              id={knownControlIds.last_name}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>Address</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your Address"}
              value={formData.address}
              readonly={
                props.readonly ||
                (props.type === "billing" &&
                  (billing_loading || billing_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.address === undefined || formData.address.length < 1
              }
              id={knownControlIds.address}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>Zip Code</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your Zip Code"}
              value={formData.zip_code}
              readonly={
                props.readonly ||
                (props.type === "billing" &&
                  (billing_loading || billing_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.zip_code === undefined || formData.zip_code.length < 1
              }
              id={knownControlIds.zip_code}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>Country</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your Country"}
              value={formData.country}
              readonly={
                props.readonly ||
                (props.type === "billing" &&
                  (billing_loading || billing_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.country === undefined || formData.country.length < 1
              }
              id={knownControlIds.country}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>State</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your State"}
              value={formData.state}
              readonly={
                props.readonly ||
                (props.type === "billing" &&
                  (billing_loading || billing_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.state === undefined || formData.state.length < 1
              }
              id={knownControlIds.state}
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row} className="rounded">
          <FormLabel column>City</FormLabel>
          <Col>
            <Form.Control
              type="text"
              placeholder={"Enter your City"}
              value={formData.city}
              readonly={
                props.readonly ||
                (props.type === "billing" &&
                  (billing_loading || billing_canContinue))
                  ? "readonly"
                  : undefined
              }
              onChange={StaticOnChange}
              isInvalid={
                formData.city === undefined || formData.city.length < 1
              }
              id={knownControlIds.city}
            />
          </Col>
        </FormGroup>
      </Form>
    );
  };

  // #endregion

  if (props.type === "billing") {
    return BillingForm();
  } else if (props.type === "shipping") {
    return ShippingForm();
  } else {
    return undefined;
  }
};

export default AddressForm;
