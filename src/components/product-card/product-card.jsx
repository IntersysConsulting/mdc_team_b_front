import React from "react";
import Price from "../price-text/price-text";
import StorefrontImage from "../storefront-image/storefront-image";
import {Link} from  'react-router-dom';
import './product-card.css';

const CardProduct = (props) => (
    <div className="pruduct-managment-container">
        <div className="image-container">
            <Link to={props.productPage}><StorefrontImage url={props.url}></StorefrontImage> </Link>
        </div>
        <div className="body-card-container">
            <div className="text-card-container">
                <Link to={props.productPage}><p className="text-indigo product-name">{props.name}</p></Link>
                <div className="name-price-card-container">
                    <p className="product-price">Price:</p>
                    <Price price={props.price}/>
                </div>
                </div>
        </div>
    </div>
)

export default CardProduct