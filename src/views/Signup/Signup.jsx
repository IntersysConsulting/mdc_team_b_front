import React from 'react';
import { withRouter } from 'react-router-dom';
import Signup from '../../components/signup/signup'
import './Signup.css'

const Signupview = ({location}) => {
  const admin = (location.pathname === "/sign-up-admin" ? true : false)
  return(
    <div className={"signup"}>
      <div className="signup-bg"></div>
      <div className="signup-login">
        { admin ? <Signup admin /> : <Signup />}
      </div>
    </div>
  )
};

export default withRouter(Signupview)
