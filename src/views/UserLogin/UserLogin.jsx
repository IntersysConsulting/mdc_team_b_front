import React, { useState, useEffect } from 'react';
import Login from '../../components/login/login'
import './UserLogin.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'


const UserLogin = props => {
let data = new FormData()
data.set("email", "bear@bear.com")
data.set("password", "bear")

  const LoginRequest = () => {
    axios.post('http://localhost:5000/api/v1/session/', data)
    .then(response => {
      console.log(response);
    })
};

  return(
    <div className={"UserLogin"}>
      <div className="UserLogin-bg"></div>
      <div className="UserLogin-login">
        <Login
          onClick={LoginRequest}
        ></Login>
      </div>
    </div>
  )
};

export default UserLogin;
