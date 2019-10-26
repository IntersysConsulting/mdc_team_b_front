import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, FormGroup, Row, Col, FormLabel } from "react-bootstrap";
import {
  putInfoActions,
  infoCanContinue
} from "../../actions/checkoutAddressActions";
import "./guest-info-form.css";

const GuestInfoForm = props => {
  const [values, setValues] = useState({
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    phone: undefined
  });

  const dispatch = useDispatch();

  const controlIds = {
    first_name: "guest_first_name",
    last_name: "guest_last_name",
    email: "guest_email",
    phone: "guest_phone"
  };

  const OnChangeControl = e => {
    for (var key in controlIds) {
      if (e.target.id === controlIds[key]) {
        let newValues = { ...values };
        newValues[key] = e.target.value;
        setValues(newValues);
        break;
      }
    }
  };

  const guestInfo = useSelector(state => state.checkoutState.guest_info);
  const continueRequested = useSelector(
    state => state.checkoutAddressState.continue_requested
  );

  const loading = useSelector(state => state.checkoutAddressState.info_loading);
  const canContinue = useSelector(
    state => state.checkoutAddressState.info_continue
  );
  const role = useSelector(state => state.authenticationState.role);

  useEffect(() => {
    if (guestInfo !== undefined) {
      setValues(guestInfo);
    }
  }, [guestInfo]);

  useEffect(() => {
    if (continueRequested && !canContinue) {
      if (role === "guest") {
        //#region Function Dependencies
        const IsValidField = field => {
          return field !== undefined && field.length > 1;
        };
        const ValidateFields = () => {
          return (
            IsValidField(values.first_name) &&
            IsValidField(values.last_name) &&
            IsValidField(values.email) &&
            IsValidField(values.phone)
          );
        };
        //#endregion
        if (ValidateFields()) {
          if (guestInfo === values) {
            // No changes were made
            dispatch(infoCanContinue());
          } else {
            // Push the response
            dispatch(putInfoActions(values));
          }
        } else {
          // Display error fields can not be blank
        }
      } else {
        // If the role is not guest, then we can auto continue since this form is not displayed
        dispatch(infoCanContinue());
      }
    }
  }, [continueRequested, canContinue, dispatch, role, values, guestInfo]);

  if (role === "guest") {
    return (
      <Form className="guest-info-form row justify-content-center">
        <h1 className="title text-center col-12">Personal information</h1>
        <Row className="col-sm-12 col-md-10 col-xl-9 justify-content-center">
          <Col className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <FormGroup as={Row} className="rounded">
              <FormLabel column className="col-6">
                First Name
              </FormLabel>
              <Col className="col col-xs-6 col-md-6 col-lg-6">
                <Form.Control
                  type="text"
                  placeholder="Enter your First Name"
                  isInvalid={
                    values.first_name === undefined ||
                    values.first_name.length <= 1
                  }
                  id={controlIds.first_name}
                  onChange={OnChangeControl}
                  value={values.first_name}
                  readonly={loading || canContinue ? "readonly" : undefined}
                ></Form.Control>
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="rounded">
              <FormLabel column className="col-6">
                Last Name
              </FormLabel>
              <Col className="col col-xs-6 col-md-6 col-lg-6">
                <Form.Control
                  type="text"
                  placeholder="Enter your Last Name"
                  id={controlIds.last_name}
                  onChange={OnChangeControl}
                  isInvalid={
                    values.last_name === undefined ||
                    values.last_name.length <= 1
                  }
                  value={values.last_name}
                  readonly={loading || canContinue ? "readonly" : undefined}
                ></Form.Control>
              </Col>
            </FormGroup>
          </Col>
          <Col className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <FormGroup as={Row} className="rounded">
              <FormLabel column className="col-6">
                Email
              </FormLabel>
              <Col className="col col-xs-6 col-md-6 col-lg-6">
                <Form.Control
                  type="email"
                  placeholder="Enter your Email"
                  id={controlIds.email}
                  onChange={OnChangeControl}
                  isInvalid={
                    values.email === undefined || values.email.length <= 1
                  }
                  value={values.email}
                  readonly={loading || canContinue ? "readonly" : undefined}
                ></Form.Control>
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="rounded">
              <FormLabel column className="col-6">
                Phone
              </FormLabel>
              <Col className="col col-xs-6 col-md-6 col-lg-6">
                <Form.Control
                  type="text"
                  placeholder="Enter your Phone"
                  id={controlIds.phone}
                  onChange={OnChangeControl}
                  isInvalid={
                    values.phone === undefined || values.phone.length <= 1
                  }
                  value={values.phone}
                  readonly={loading || canContinue ? "readonly" : undefined}
                ></Form.Control>
              </Col>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  } else {
    return <div></div>;
  }
};

export default GuestInfoForm;
