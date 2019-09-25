import React from "react";
import Price from "../price-text/price-text";
import StorefrontImage from "../storefront-image/storefront-image";
import './product-card.css';

const CardProduct = (props) => (
    <div className="pruduct-managment-container">
        <div className="image-container">
            <StorefrontImage url={props.url}></StorefrontImage>
        </div>
        <div className="body-card-container">
            <div className="text-card-container">
                <p className="text-indigo product-name">{props.name}</p>
                <div className="name-price-card-container">
                    <p className="product-price">Price:</p>
                    <Price price={props.price}/>
                </div>
                </div>
        </div>
    </div>
)

export default CardProduct