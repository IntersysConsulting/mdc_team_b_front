import React from "react";
import CancelButton from "./cancel-button.jsx";

function CancelButtonDemo(props) {
  function AlertCancel() {
    return alert("You clicked on a cancel button!");
  }

  return (
    <div>
      <h1>Cancel Button Demo</h1>
      <div className={"row justify-content-md-center"}>
        <CancelButton
          className="col-1"
          onClick={props.alerts ? AlertCancel : undefined}
        >
          No
        </CancelButton>
        <CancelButton
          className="col-2"
          border
          onClick={props.alerts ? AlertCancel : undefined}
        >
          Cancel
        </CancelButton>
        <CancelButton
          className="col-2"
          onClick={props.alerts ? AlertCancel : undefined}
        >
          Cancel order
        </CancelButton>
        <CancelButton
          className="col-2"
          onClick={props.alerts ? AlertCancel : undefined}
        >
          Go back
        </CancelButton>
      </div>
    </div>
  );
}

export default CancelButtonDemo;
