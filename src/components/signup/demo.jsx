import React from "react";
import Login from "./login.jsx";

const LoginDemo = props => {
  return (
    <div className="container">
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
