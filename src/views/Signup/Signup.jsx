import React from 'react';
import Signup from '../../components/signup/signup'
import './Signup.css'

const signup = props => {
  return(
    <div className={"signup"}>
      <div className="signup-bg"></div>
      <div className="signup-login">
        <Signup
          onClick={() => {
            alert("You attempted to sign up!");
          }}
        ></Signup>
      </div>
    </div>
  )
};

export default signup;
