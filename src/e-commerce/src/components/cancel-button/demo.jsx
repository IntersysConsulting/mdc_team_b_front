import React from "react";
import CancelButton from "./cancel-button.jsx";

function CancelButtonDemo() {
  return (
    <div>
      <h1>Cancel Button Demo</h1>
      <div className={"row"}>
        <div className={"col-1"}>
          <CancelButton></CancelButton>
        </div>
        <div className={"col-2"}>
          <CancelButton cart>No</CancelButton>
        </div>
        <div className={"col-3"}>
          <CancelButton border>Cancel</CancelButton>
        </div>
        <div className={"col-4"}>
          <CancelButton>Cancel order</CancelButton>
        </div>
        <div className={"col-2"}>
          <CancelButton>Go back</CancelButton>
        </div>
      </div>
    </div>
  );
}

export default CancelButtonDemo;
