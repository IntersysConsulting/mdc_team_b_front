import React, { useState } from "react";
import { withRouter } from "react-router-dom"
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom"
import Logo from "../layout/logo/logo.png";
import { login } from "../../api/authenticationApi";
import PasswordField from "../../containers/password-field/password-field.js";
import AcceptButton from "../accept-button/accept-button.jsx";
import "./login.css";

const Login = props => {
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState({ email: "", password: "" });

  const Send = (event) => {
    event.preventDefault();
    let formData = new FormData()
    formData.set('email', loginState.email)
    formData.set('password', loginState.password)
    dispatch(login(formData, props.admin))
  };

  const onChangeInput = event => {
    let newValue = {...loginState}
    newValue[event.target.name] = event.target.value
    setLoginState(newValue)
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
              name="email"
              placeholder="Email"
              onChange={onChangeInput}
              value={loginState.email}
              className="border-dark border-2 mb-4"
            ></Form.Control>
            <PasswordField name="password" placeholder="Password" onChange={onChangeInput}></PasswordField>
          </Form>
          <Link to={"/recovery-password"} className="login-forgot text-dark">
            Forgot my password
          </Link>
        </div>
        <div className="login-footer mt-4 px-4 mb-2">
          <Link to={"/login"} className="login-signup text-indigo">
            Sign up instead!
          </Link>
          <AcceptButton border className="login-button" onClick={Send}>
            Log in
          </AcceptButton>
        </div>
      </div>
      <div className="text-dark login-link-holder">
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

const loginWithRouter = withRouter(Login)
export default loginWithRouter;