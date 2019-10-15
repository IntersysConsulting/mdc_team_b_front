import React from "react"
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom"
import Logo from "../../layout/logo/logo-blanco.png";
import PasswordField from "../../../containers/password-field/password-field.js";
import AcceptButton from "../../accept-button/accept-button.jsx";
import Checkbox from "../../checkbox/Checkbox";

const FormUser = props => {
  const changeInput = e => {
      let newValue = {...props.values}
      newValue[e.target.name] = e.target.value
      props.set(newValue)
  }

  return (
    <div className="signup-holder">
      <div className="signup-card border-dark">
        <img alt="logo"  className="signup-header px-4 mt-4 mb-4" src={Logo}></img>
        <Form.Group className="px-4">
          <div className="signup-fullname mb-4">
            <Form.Control
              name="first_name"
              type="text"
              placeholder="First Name"
              onChange={changeInput}
              value={props.values.first_name}
              className="border-dark border-2"
              required
            />
            <span className="signup-span"/>
            <Form.Control
              name="last_name"
              type="text"
              placeholder="Last Name"
              onChange={changeInput}
              value={props.values.last_name}
              className="border-dark border-2 px-4"
              required
            />
          </div>
          <div className="signup-row">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              onChange={changeInput}
              value={props.values.email}
              className="border-dark border-2 mb-4"
              required
            />
            <PasswordField placeholder="Password" name="password" value={props.values.password} onChange={changeInput} />
            <PasswordField placeholder="Confirm Password" name="confirm" value={props.values.confirm} onChange={changeInput} />
            <Checkbox checked={props.values.accepted} onClick={changeInput} name="accepted" className="signup-checkbox" required >
              I have read and accept <Link  className="text-orange" to={'/terms'}>Terms of service</Link>.
            </Checkbox>
            <div className="signup-footer mb-2">
              <AcceptButton type="submit" activate={props.values.accepted} className="  signup-button border-dark" onClick={props.onClick}>
                Sign Up
              </AcceptButton>
            </div>
          </div>
        </Form.Group> 
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
}

export default FormUser