import React from 'react';
import Login from '../../components/login/login'
import './AdminLogin.css'

const AdminLogin = props => {
  return(
    <div className={"AdminLogin"}>
      <div className="AdminLogin-bg"></div>
      <div className="AdminLogin-login">
      <Login admin/>
      </div>
    </div>
  )
};

export default AdminLogin;
