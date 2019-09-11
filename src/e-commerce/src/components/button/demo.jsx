import React from "react";
import AcceptButton from "./accept-button.jsx";

const AcceptButtonDemo = () => {
  return (
    <div>
      <div className={"col-1"}>
        <AcceptButton></AcceptButton>
      </div>
      <AcceptButton></AcceptButton>
      <AcceptButton></AcceptButton>
      <AcceptButton></AcceptButton>
      <AcceptButton></AcceptButton>
      <AcceptButton></AcceptButton>
      <AcceptButton border>Finish Order</AcceptButton>
      <AcceptButton cart>Add to Cart</AcceptButton>
    </div>
  );
};

export default AcceptButtonDemo;
