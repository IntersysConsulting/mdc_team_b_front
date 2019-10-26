import React from 'react';
import Signup from '../../components/signup/signup'
import './Signup.css'

const Signupview = () => (
  <div className={"signup"}>
    <div className="signup-bg"/>
    <div className="signup-login">
      <Signup />
    </div>
  </div>
)

export default Signupview
