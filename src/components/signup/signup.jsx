import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom"
import Logo from "../layout/logo/logo-blanco.png";
import PasswordField from "../../containers/password-field/password-field.js";
import AcceptButton from "../accept-button/accept-button.jsx";
import Checkbox from "../checkbox/Checkbox";

import "./signup.css";

const Signup = props => {
  const [signupState, setSignupState] = useState({ firstName:"" , lastName:"" , email:"" , password:"", accepted: false });

  const changeInput = e => {
    let newValue = {...signupState}
      newValue[e.target.name] = e.target.value
      setSignupState(newValue)
  }

  return (
    <div className="signup-holder">
      <div className="signup-card border-dark">
        <div className="signup-header px-4 mt-4 mb-4">
          <img alt="logo" src={Logo}></img>
        </div>
        <div className="signup-body px-4">
          <Form>
            <div>
              <div className="signup-fullname">
                <div className="signup-name">
                  <Form.Control
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={changeInput}
                    value={signupState.firstName}
                    className="border-dark border-2 mb-4"
                  ></Form.Control>
                </div>
                <div className="signup-last">
                  <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={changeInput}
                    value={signupState.lastName}
                    className="border-dark border-2 mb-4"
                  ></Form.Control>
                </div>
            </div>
            </div>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              onChange={changeInput}
              value={signupState.email}
              className="border-dark border-2 mb-4"
            ></Form.Control>
            <PasswordField placeholder="Password" name="password" onChange={changeInput}></PasswordField>
            <PasswordField placeholder="Confirm Password" name="confirm" onChange={changeInput}></PasswordField>
          </Form>
          <Checkbox checked={signupState.accepted} onClick={changeInput} name="accepted" className="signup-checkbox">
            I have read and accept <Link  className="text-orange" to={'/terms'}>Terms of service</Link>.
          </Checkbox>
        </div>
        <div className="signup-footer px-4 mb-2">
          <AcceptButton className="signup-button border-dark" onClick={props.onClick}>
            Sign Up
          </AcceptButton>
        </div>
        <div className="mb-4 px-4 signup-textlogin">
          <span className="text-indigo">
            Already have an account? 
          </span>
        <Link to={"/login"} className="signup-login text-indigo">
          Log in instead!
        </Link>
        </div>
      </div>
      <div className="signup-link-holder">
        <Link to={"/help"} className="text-dark text-help">
          Help
        </Link>
        <Link to={"/conditions"} className="text-dark text-conditions">
          Conditions
        </Link>
        <Link to={"/privacy"} className="text-dark text-privacy">
          Privacy
        </Link>
      </div>
    </div>
  );
};

export default Signup;
