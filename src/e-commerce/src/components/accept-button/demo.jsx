import React from "react";
import AcceptButton from "./accept-button.jsx";

function AcceptButtonDemo() {
  return (
    <div>
      <h1>Accept Button Demo</h1>
      <div className={"row"}>
        <div className={"col-1"}>
          <AcceptButton border cart></AcceptButton>
        </div>
        <div className={"col-2"}>
          <AcceptButton cart>Add to cart</AcceptButton>
        </div>
        <div className={"col-3"}>
          <AcceptButton border>Proceed to checkout</AcceptButton>
        </div>
        <div className={"col-4"}>
          <AcceptButton>Continue</AcceptButton>
        </div>
        <div className={"col-2"}>
          <AcceptButton>Yes</AcceptButton>
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-6"}>
          <AcceptButton>Finish Order</AcceptButton>
        </div>
        <div className={"col-6"}>
          <AcceptButton cart border>
            Add to Cart
          </AcceptButton>
        </div>
      </div>
    </div>
  );
}

export default AcceptButtonDemo;
