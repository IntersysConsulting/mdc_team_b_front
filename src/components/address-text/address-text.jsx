import React from "react";
import "./address-text.css";
const AddressText = props => {
  return (
    <p className="address-text">
      {props.name}
      <br />
      {props.address}
      <br />
      <span className="to-uppercase">
        {props.country}, {"(" + props.state + ")"}, {props.zipCode}
      </span>
    </p>
  );
};

export default AddressText;
