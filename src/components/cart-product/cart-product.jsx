import React from "react";
import Price from "../price-text/price-text";
import Quantity from '../quantity/quantity';
import StorefrontImage from "../storefront-image/storefront-image";
import './cart-product.css';

const CartProduct = (props) => {
    const change = () =>{
        alert("You changed the quantity");
      }
    return(
    <div className="cart-product-container">
        <div className="cart-product-image-container">
            <StorefrontImage url={props.url}></StorefrontImage>
        </div>
        <div className="cart-product-body-item-container">
            <div className="cart-product-info-container">
                <p className="text-indigo cart-product-name">{props.name}</p>
                <Price price={props.price}/>
            </div>
            <div className="cart-product-update-options-container">
                <div className="cart-product-quantity-text-container">
                    <p>Quantity: </p><Quantity className="cart-product-quantity-container" onChange={change}/>
                </div>                
                <p className="cart-product-delete-text">Delete</p>
            </div>                
        </div>
    </div>
    );
};

export default CartProduct