import React from "react";
import {Card} from "react-bootstrap";
import Price from "../price-text/price-text";
import EditButton from "../edit-button/edit-button";

const CardProduct = (props) => (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            {/* This is the image component */}
            <Price price={30000}></Price>
            <EditButton
                className="manage-edit-button icon-only icon-50x50 rounded-0"
                onClick={props.edit}
                icon
            ></EditButton>
        </Card.Body>
    </Card>
)

export default CardProduct