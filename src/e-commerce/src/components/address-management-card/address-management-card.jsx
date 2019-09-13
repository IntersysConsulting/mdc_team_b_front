import React from "react";
import { Card } from "react-bootstrap";
import EditButton from "../edit-button/edit-button.jsx";
import DeleteButton from "../delete-button/delete-button.jsx";
import AddressText from "../address-text/address-text.jsx";
import "./address-management-card.css";

const AddressManagementCard = props => {
  return (
    <Card className="border-indigo rounded-0">
      <Card.Title className="text-orange">
        {props.preferred ? "Preferred" : ""}
      </Card.Title>
      <Card.Text>
        <AddressText
          name={props.name}
          address={props.address}
          country={props.country}
          state={props.state}
          zipCode={props.zipCode}
        ></AddressText>
      </Card.Text>
      <div className="button-holder">
        <EditButton
          className="manage-edit-button icon-only icon-50x50 rounded-0"
          onClick={props.edit}
          icon
        ></EditButton>
        <DeleteButton
          variant="orange"
          className="manage-delete-button icon-50x50 rounded-0"
          onClick={props.delete}
        ></DeleteButton>
      </div>
    </Card>
  );
};

export default AddressManagementCard;
