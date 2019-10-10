import React, { useState } from "react";
import { withRouter } from "react-router-dom"
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom"
import Logo from "../layout/logo/logo.png";
import { login } from "../../api/authenticationApi";
import PasswordField from "../../containers/password-field/password-field.js";
import AcceptButton from "../accept-button/accept-button.jsx";
import PrivacyAndTermsModal from "../privacy-and-terms-modal/privacy-and-terms-modal";
import "./login.css"

const Login = props => {

  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState({ email: "", password: "" });
  const [conditionsModalShow, conditionsModalSetShow] = useState(false);
  const conditionsModalHandleShow = () => conditionsModalSetShow(!conditionsModalShow);
  const [privacyModalShow, privacyModalSetShow] = useState(false);
  const privacyModalHandleShow = () => privacyModalSetShow(!privacyModalShow);

  const Send = (event) => {
    event.preventDefault();
    let formData = new FormData()
    formData.set('email', loginState.email)
    formData.set('password', loginState.password)
    dispatch(login(formData, props.admin)).then(() => {
      if (props.admin) {
        props.history.push("/admin")
      } else {
        props.history.push("/")
      }
    })
  };

  const onChangeInput = event => {
    let newValue = { ...loginState }
    newValue[event.target.name] = event.target.value
    setLoginState(newValue)
  };

  return (

    <div className="login-holder">

      <PrivacyAndTermsModal title="Terms and Conditions" show={conditionsModalShow} handleShow={conditionsModalHandleShow}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis velit turpis, vitae pellentesque sem elementum nec.
        Mauris purus mi, posuere id dolor et, finibus euismod massa. Suspendisse potenti. Sed purus leo, euismod eu facilisis ut,
        tempor pretium augue. Phasellus quis laoreet erat, id rhoncus velit. In tristique tortor non mi malesuada rutrum.
        Proin quis maximus mi, ultricies convallis ante. Nunc sagittis purus ipsum, nec suscipit libero egestas ut. Fusce feugiat dui
        nec vehicula tempor. Quisque sem lorem, finibus ac quam nec, cursus vestibulum sem. Aenean eget nisi eleifend purus fringilla
        tempus vitae et ante.
      </PrivacyAndTermsModal>

      <PrivacyAndTermsModal title="Privacy Policy" show={privacyModalShow} handleShow={privacyModalHandleShow}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis velit turpis, vitae pellentesque sem
        elementum nec. Mauris purus mi, posuere id dolor et, finibus euismod massa. Suspendisse potenti. Sed purus leo,
        euismod eu facilisis ut, tempor pretium augue. Phasellus quis laoreet erat, id rhoncus velit. In tristique tortor
        non mi malesuada rutrum. Proin quis maximus mi, ultricies convallis ante. Nunc sagittis purus ipsum, nec suscipit
        libero egestas ut. Fusce feugiat dui nec vehicula tempor. Quisque sem lorem, finibus ac quam nec, cursus vestibulum
        sem. Aenean eget nisi eleifend purus fringilla tempus vitae et ante.
      </PrivacyAndTermsModal>

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
        <div className="text-dark text-help">
          <Link to={"/help"} className="text-dark text-help">
            Help
        </Link>
        </div>
        <div className="text-dark text-conditions">
          <a onClick={conditionsModalHandleShow}>
            Conditions
          </a>
        </div>
        <div className="text-dark text-privacy">
          <a onClick={privacyModalHandleShow}>
            Privacy
          </a>
        </div>
      </div>
    </div>
  );
};

const loginWithRouter = withRouter(Login)
export default loginWithRouter;