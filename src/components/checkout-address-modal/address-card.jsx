import React from "react";
import { Card } from "react-bootstrap";
import AddressText from "../address-text/address-text.jsx";
import "./address-card.css";

const AddressCard = props => {

    const returnSelectedAddress = () => {
        let obj = {
            name: props.name,
            address: props.address,
            country: props.country,
            state: props.state,
            zipCode: props.zipCode,
        }

        props.onClick(obj)
    }

    return (
        <a style={{ cursor: 'pointer' }} onClick={returnSelectedAddress} href>
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