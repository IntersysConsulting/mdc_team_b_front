import React, { useState } from "react";
import { Card } from "react-bootstrap";
import AddressText from "../address-text/address-text.jsx";
import ManageInfoButton from "../manage-info-button/manage-info-button.jsx";
import "./personal-details-card.css";

const PersonalDetailsCard = props => {
  const orByDefault = () => {
    return (
      <p>
        You haven't added a preferred {props.detailName} yet. <br />
        Why don't you set one up by{" "}
        <a className="text-green" onClick={props.onClick} href="#">
          clicking here
        </a>
        ?
      </p>
    );
  };

  return (
    <Card className={"personal-details-card border-indigo"}>
      <Card.Title>Preferred {props.detailName}</Card.Title>
      <Card.Text className="pdc-text-container">
        {props.name ? (
          <AddressText
            name={props.name}
            address={props.address}
            state={props.state}
            country={props.country}
            zipCode={props.zipCode}
          ></AddressText>
        ) : (
          orByDefault()
        )}
      </Card.Text>
      <ManageInfoButton className={"rounded-0"} onClick={props.onClick}>
        {props.detailName}es
      </ManageInfoButton>
    </Card>
  );
};

export default PersonalDetailsCard;
