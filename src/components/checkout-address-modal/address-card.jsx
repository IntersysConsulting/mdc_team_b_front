import React from "react";
import { Card } from "react-bootstrap";
import AddressText from "../address-text/address-text.jsx";
import "./address-card.css";

const AddressCard = props => {


    return (
        <a style={{ cursor: 'pointer' }} onClick={props.selectAddress} href>
            <Card className="rounded-0 address-card">
                <Card.Text>
                    <AddressText
                        name={props.name}
                        address={props.address}
                        country={props.country}
                        state={props.state}
                        zipCode={props.zipCode}
                    ></AddressText>
                </Card.Text>
            </Card>
        </a>
    );
};

export default AddressCard;