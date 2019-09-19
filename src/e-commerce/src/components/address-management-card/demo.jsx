import React from "react";
import AddressManagementCard from "./address-management-card.jsx";

const AddressManagementCardDemo = props => {
  const alertEdit = () => {
    alert("You clicked on an edit button in an address management card!");
  };

  const alertDelete = () => {
    alert("You clicked on an delete button in an address management card!");
  };
  return (
    <div className="container">
      <h1>Address Management Card Demo</h1>
      <div className="row justify-content-md-center mx-auto">
        <div className="col-md-auto">
          <AddressManagementCard
            preferred
            name="John Smith"
            address="Rockford Mountain Lane 2179"
            country="us"
            state="nc"
            zipCode="27514"
            edit={props.alerts ? alertEdit : undefined}
            delete={props.alerts ? alertDelete : undefined}
          ></AddressManagementCard>
        </div>
        <div className="col-md-auto ">
          <AddressManagementCard
            name="Roy K Windburn"
            address="Andy Street 3958"
            country="us"
            state="sd"
            zipCode="57102"
            edit={props.alerts ? alertEdit : undefined}
            delete={props.alerts ? alertDelete : undefined}
          ></AddressManagementCard>
        </div>
        <div className="col-md-auto ">
          <AddressManagementCard
            name="Paul C Porter"
            address="Grim Avenua 4825"
            country="us"
            state="ca"
            zipCode="92103"
            edit={props.alerts ? alertEdit : undefined}
            delete={props.alerts ? alertDelete : undefined}
          ></AddressManagementCard>
        </div>
        <div className="col-md-auto ">
          <AddressManagementCard
            name="Rosaria K Stark"
            address="Sunrise Road 3470"
            country="us"
            state="nv"
            zipCode="89014"
            edit={props.alerts ? alertEdit : undefined}
            delete={props.alerts ? alertDelete : undefined}
          ></AddressManagementCard>
        </div>
      </div>
    </div>
  );
};

export default AddressManagementCardDemo;
