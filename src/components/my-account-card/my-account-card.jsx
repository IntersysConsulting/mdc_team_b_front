import React from "react";
import { Card } from "react-bootstrap";
import ChangeViewButton from "../change-view-button/change-view-button.jsx";

import "./my-account-card.css";

const MyAccountCard = props => {
  return (
    <Card className={`my-account-card border-indigo border-2 ${props.collapsable?'my-account-card-collapsable':''}`}>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.children ? props.children : "Something went wrong"}
      </Card.Text>
      <ChangeViewButton
        className={`my-account-button rounded-0 ${props.collapsable?'my-account-card-collapsable':''}`}
        onClick={props.onClick}
      >
        {props.buttonText?props.buttonText:"See more"}
      </ChangeViewButton>
    </Card>
  );
};

export default MyAccountCard;
