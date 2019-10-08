import React from 'react';
import Login from '../../components/login/login'
import './UserLogin.css'


const UserLogin = props => {

   return(
    <div className={"UserLogin"}>
      <div className="UserLogin-bg"></div>
      <div className="UserLogin-login">
        <Login />
      </div>
    </div>
  )
};

export default UserLogin;
