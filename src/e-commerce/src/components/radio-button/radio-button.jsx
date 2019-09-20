import React from "react";
import { Form } from "react-bootstrap";
import "./radio-button.css";
const RadioButton = props => {
  return (
    <Form.Check
      custom
      type="radio"
      id={props.id}
      label={props.label}
      name={props.name}
      onChange={props.onChange}
      checked={props.checked}
    ></Form.Check>
  );
};

export default RadioButton;
