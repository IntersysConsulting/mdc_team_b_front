import React from 'react';
import StorefrontImage from "./storefrontImage"
import digital from './images/digital.jpg'
import not from './images/not.jpg'
import physical from './images/physical.jpg'
import {Col, Row} from 'react-bootstrap';

const DemoStorefrontImage = () => (
    <div>
        <h1>Demo Storefront Image</h1>
        <Row>
            <Col xs={6} md={4}>
                <StorefrontImage url={digital}></StorefrontImage>
            </Col>
            <Col xs={6} md={4}>
                <StorefrontImage url={not}></StorefrontImage>
            </Col>
            <Col xs={6} md={4}>
                <StorefrontImage url={physical}></StorefrontImage>
            </Col>
        </Row>
    </div>
)

export default DemoStorefrontImage