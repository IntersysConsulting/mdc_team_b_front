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
                className="col-1"
                height="120px"
                icon
            >
                Edit
            </EditButton>
        </Card.Body>
    </Card>
)

export default CardProduct