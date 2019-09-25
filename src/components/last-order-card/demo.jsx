import React from "react";
import LastOrderCard from "./last-order-card.jsx";

const LastOrderCardDemo = props => {
  const AlertLastOrderCard = () => {
    alert("You clicked on a last order card!");
  };

  return (
    <div className="container">
      <h1>Last Order Card Demo</h1>
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <LastOrderCard
            details=""
            onClick={props.alerts ? AlertLastOrderCard : undefined}
          ></LastOrderCard>
        </div>
      </div>
    </div>
  );
};

export default LastOrderCardDemo;
