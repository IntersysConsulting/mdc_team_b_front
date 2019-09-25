import React from "react";
import ManageInfoButton from "./manage-info-button.jsx";

const ManageInfoButtonDemo = props => {
  const AlertManageInfo = () => {
    alert("You clicked on a manage info button!");
  };
  return (
    <div>
      <h1>Manage Info Button Demo</h1>
      <div className="row justify-content-md-center">
        <ManageInfoButton
          onClick={props.alerts ? AlertManageInfo : undefined}
          className="col-4 static"
        >
          Shipping Info
        </ManageInfoButton>
        .
        <ManageInfoButton
          onClick={props.alerts ? AlertManageInfo : undefined}
          className="col-2 static"
        >
          Billing Info
        </ManageInfoButton>
      </div>
    </div>
  );
};

export default ManageInfoButtonDemo;
