import React, {useState} from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./password-field.css";

const PasswordField = props => {
  const [visiblePass, setVisiblePass] = useState(false)

  const togglePass = () => {
    setVisiblePass(!visiblePass)
  }

  return (
    <div className="">
      <InputGroup className="mb-4 justify-content-md-center">
        <Form.Control
          name={props.name}
          className="col-11 mr-4 border-dark border-2 rounded"
          type={visiblePass ? "text" : "password"}
          placeholder={props.placeholder}
          onChange={props.onChange}
        ></Form.Control>
        <InputGroup.Append>
          <div
            className={
              "toggle-visibility-button " +
              (visiblePass ? "open-eye" : "closed-eye")
            }
            onClick={togglePass}
          ></div>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default PasswordField;
