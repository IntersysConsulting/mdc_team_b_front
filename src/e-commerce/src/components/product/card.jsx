import React from "react";
import {Button, Card} from "react-bootstrap";

const Product = (props) => (
    <Card style={{ width: '18rem' }}>
        {/* This is the price component */}
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            {/* This is the price component */}
            <EditButton
                className="manage-edit-button icon-only icon-50x50 rounded-0"
                onClick={props.edit}
                icon
            ></EditButton>
        </Card.Body>
    </Card>
)

export default cardProduct