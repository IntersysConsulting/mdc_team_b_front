import React from "react";
import { Card } from "react-bootstrap";
import ChangeViewButton from "../change-view-button/change-view-button.jsx";

import "./last-order-card.css";

const LastOrderCard = props => {
  return (
    <Card className="last-order-card border-indigo border-2">
      <Card.Title>My Last Order</Card.Title>
      <Card.Text>
        {props.details ? props.details : "You haven't purchased anything yet."}
      </Card.Text>
      <ChangeViewButton
        className={"last-order-button rounded-0"}
        onClick={props.onClick}
      >
        See my orders
      </ChangeViewButton>
    </Card>
  );
};

export default LastOrderCard;
