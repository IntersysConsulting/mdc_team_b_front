import React from "react";
import MyAccountCard from "./my-account-card";

const MyAccountCardDemo = props => {
  const AlertLastOrderCard = () => {
    alert("You clicked on a last order card!");
  };

  return (
    <div className="container">
      <h1>Last Order Card Demo</h1>
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <MyAccountCard
            title="Preferred Billing Adress"
            onClick={props.alerts ? AlertLastOrderCard : undefined}
          >
            <p>John</p>
          </MyAccountCard>
          <MyAccountCard
            title="Preferred Shipping Adress"
            onClick={props.alerts ? AlertLastOrderCard : undefined}
          >
            <p>John</p>
          </MyAccountCard>
          <MyAccountCard
            title="My last order"
            collapsable
            onClick={props.alerts ? AlertLastOrderCard : undefined}
          >
            <p>John</p>
          </MyAccountCard>
        </div>
      </div>
    </div>
  );
};

export default MyAccountCardDemo;
