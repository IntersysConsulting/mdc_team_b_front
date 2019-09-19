import React from 'react';
import {Image} from 'react-bootstrap';
import './image.css';

const StorefrontImage = (props) => (
    <div className="image-container" >
        <Image src={props.url} rounded></Image>
    </div>
)

export default StorefrontImage;