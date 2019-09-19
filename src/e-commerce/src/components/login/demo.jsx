import React from "react";
import Login from "./login.jsx";

const LoginDemo = props => {
  return (
    <div className="container">
      <h1>Login Demo</h1>
      <div className="d-flex justify-content-center">
        <Login
          onClick={() => {
            alert("You attempted to log in!");
          }}
        ></Login>
      </div>
    </div>
  );
};

export default LoginDemo;
