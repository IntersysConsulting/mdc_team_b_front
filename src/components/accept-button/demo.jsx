import React from "react";
import AcceptButton from "./accept-button.jsx";

const AcceptButtonDemo = props => {
  const AlertAccept = () => {
    alert("You clicked on an accept button!");
  };

  return (
    <div>
      <h1>Accept Button Demo</h1>
      <div className={"row justify-content-md-center"}>
        <AcceptButton
          className={"col-2"}
          border
          cart
          onClick={props.alerts ? AlertAccept : undefined}
        ></AcceptButton>
        <AcceptButton
          className={"col-2"}
          cart
          onClick={props.alerts ? AlertAccept : undefined}
        >
          Add to cart
        </AcceptButton>
      </div>
      <div className={"row justify-content-md-center"}>
        <AcceptButton
          className={"col-2"}
          border
          onClick={props.alerts ? AlertAccept : undefined}
        >
          Proceed to checkout
        </AcceptButton>
        <AcceptButton
          className={"col-3"}
          border
          onClick={props.alerts ? AlertAccept : undefined}
        >
          Continue
        </AcceptButton>
        <AcceptButton
          className={"col-2"}
          onClick={props.alerts ? AlertAccept : undefined}
        >
          Yes
        </AcceptButton>
      </div>
      <div className={"row justify-content-md-center"}>
        <div
          className={"col-4"}
          onClick={props.alerts ? AlertAccept : undefined}
        >
          <AcceptButton>Finish Order</AcceptButton>
        </div>
        <div className={"col-4"}>
          <AcceptButton
            cart
            border
            onClick={props.alerts ? AlertAccept : undefined}
          >
            Add to Cart
          </AcceptButton>
        </div>
      </div>
    </div>
  );
};

export default AcceptButtonDemo;
