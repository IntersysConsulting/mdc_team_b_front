import React from "react";
import PasswordFieldContainer from "../../containers/password-field/password-field.js";

const PasswordFieldDemo = props => {
  const alertValueChange = e => {
    alert("The password field has been updated to " + e.target.value + "!");
  };
  return (
    <div>
      <h1>Password Field Demo</h1>
      <PasswordFieldContainer
        onChange={alertValueChange}
      ></PasswordFieldContainer>
    </div>
  );
};

export default PasswordFieldDemo;
