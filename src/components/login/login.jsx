import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom"
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
          <Link to={"/recovery-password"} className="login-forgot text-dark">
            Forgot my password
          </Link>
        </div>
        <div className="login-footer mt-4 px-4 mb-2">
          <Link to={"/signup"} className="login-signup text-indigo">
            Sign up instead!
          </Link>
          <AcceptButton border className="login-button" onClick={props.onClick}>
            Log in
          </AcceptButton>
        </div>
      </div>
      <div className="text-dark login-link-holder">
        <Link to={"/help"} className="text-dark login-help">
          Help
        </Link>
        <Link to={"/conditions"} className="text-dark login-conditions">
          Help
        </Link>
        <Link to={"/privacy"} className="text-dark login-privacy">
          privacy
        </Link>
      </div>
    </div>
  );
};

export default Login;
