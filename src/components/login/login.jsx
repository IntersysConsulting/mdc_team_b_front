import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Logo from "../layout/logo/logo.png";
import PasswordField from "../../containers/password-field/password-field.js";
import AcceptButton from "../accept-button/accept-button.jsx";

import "./login.css";

const Login = props => {
  const [loginState, setLoginState] = useState({ email: "", password: "" });

  const onChangeEmail = e => {
    setLoginState({ email: e.target.value, password: loginState.password });
  };
  const onChangePassword = e => {
    setLoginState({ email: loginState.email, password: e.target.value });
  };

  return (
    <div className="login-holder">
      <div className="login-card border-indigo">
        <div className="login-header">
          <img alt="logo" src={Logo}></img>
        </div>
        <div className="login-body px-4">
          <Form>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={onChangeEmail}
              value={loginState.email}
              className="border-dark border-2 mb-4"
            ></Form.Control>
            <PasswordField placeholder="Password" onChange={onChangePassword}></PasswordField>
          </Form>
          <a className="login-forgot text-dark" href="#">
            Forgot my password
          </a>
        </div>
        <div className="login-footer mt-4 px-4 mb-2">
            <a href="#" className="login-signup text-indigo">
              Sign up instead!
            </a>
            <AcceptButton border className="login-button" onClick={props.onClick}>
              Log in
            </AcceptButton>
        </div>
      </div>
      <div className="text-dark login-link-holder">
        <a href="#" className="text-dark text-help">
          Help
        </a>
        <a href="#" className="text-dark text-conditions">
          Conditions
        </a>
        <a href="#" className="text-dark text-privacy">
          Privacy
        </a>
      </div>
    </div>
  );
};

export default Login;
