import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./password-field.css";

const PasswordField = props => {
  return (
    <div className="">
      <InputGroup className="mb-4 justify-content-md-center">
        <Form.Control
          className="col-3 mr-4 border-dark border-2 rounded"
          type={props.open ? "text" : "password"}
          placeholder="Password"
        ></Form.Control>
        <InputGroup.Append>
          <div
            className={
              "toggle-visibility-button " +
              (props.open ? "open-eye" : "closed-eye")
            }
            onClick={props.onClick}
          ></div>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default PasswordField;
