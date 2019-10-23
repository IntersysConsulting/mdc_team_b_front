import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewShipping, setNewBilling } from "../../actions/checkoutActions";
import { Form, FormGroup, FormLabel, Row, Col } from "react-bootstrap";
import "./address-form.css";

const AddressForm = props => {
  const [formData, setFormData] = useState(undefined);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTextfield, setIsTextfield] = useState([]);
  const dispatch = useDispatch();

  const shouldPost = useSelector(
    state => state.checkoutState.should_update_addresses
  );

  useEffect(() => {
    MakeFormData();
  }, [props.values]);

  useEffect(() => {
    if (!loading) {
      MakeRows();
    }
  }, [loading, formData]);

  const PostToRedux = () => {
    console.log("Posting to redux");
    if (formData !== undefined) {
      if (props.type === "shipping") {
        dispatch(setNewShipping(formData));
      } else if (props.type === "billing") {
        dispatch(setNewBilling(formData));
      } else {
        console.log(
          "PostToRedux failed, props.type must be shipping or billing"
        );
      }
    }
  };

  useEffect(() => {
    if (shouldPost && !props.readonly) {
      PostToRedux();
    }
  }, [shouldPost, props.readonly]);

  const GenericOnChange = e => {
    let newFormData = { ...formData };
    newFormData[e.target.id] = e.target.value;
    setFormData(newFormData);
  };

  const MakeFormData = () => {
    let tmp_list = [...props.values];
    // Because of the way we reduce the list to a json we have to add in a blank object at the beggining
    tmp_list.unshift({});
    let tmp_textFields = Object();
    let tmpFormData = tmp_list.reduce((last_value, value, index) => {
      last_value[value.field] = value.value;
      tmp_textFields[value.field] = value.textarea !== undefined;
      return last_value;
    });
    setIsTextfield(tmp_textFields);
    setFormData(tmpFormData);
    setLoading(false);
  };

  const MakeRow = (key, textarea) => {
    if (formData !== undefined) {
      return (
        <FormGroup as={Row} className="rounded">
          <FormLabel column>{key}</FormLabel>
          <Col>
            {textarea === false ? (
              <Form.Control
                type="text"
                placeholder={"Enter your " + key}
                value={formData[key]}
                readonly={!props.readonly ? undefined : "readonly"}
                onChange={GenericOnChange}
                id={key}
              ></Form.Control>
            ) : (
              <Form.Control
                type="text"
                placeholder={"Enter your " + key}
                value={formData[key]}
                readonly={!props.readonly ? undefined : "readonly"}
                as="textarea"
                rows="3"
                onChange={GenericOnChange}
                id={key}
              ></Form.Control>
            )}
          </Col>
        </FormGroup>
      );
    }
  };

  const MakeRows = () => {
    let tmp_rows = [];
    for (let key in formData) {
      tmp_rows.push(MakeRow(key, isTextfield[key]));
    }

    setRows(tmp_rows);
  };

  return <Form className="address-display">{rows}</Form>;
};

export default AddressForm;
